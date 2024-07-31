import {useEffect, useState} from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());
    useEffect(
        () => {
            const intervalID = setInterval(
                () => {
                    setTime(new Date());
                }, 1000
            )
            return () => {
                clearInterval(intervalID);
            }
        }, []
    )

    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridien = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${hours}:${minutes}:${seconds} ${meridien}`;
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default DigitalClock;