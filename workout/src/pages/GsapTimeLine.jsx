import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

const GsapTimeline = () => {

    const timeline = gsap.timeline({
        repeat: -1, repeatDelay: 1, yoyo: true
    });

    useGSAP(() => {
        timeline.to("#yellow-box", {
            x: 0,
            rotation: 360,
            borderRadius: "100%",
            duration: 2,
            ease: "back.inOut",
        })
        timeline.to("#yellow-box", {
            y: 250,
            x: 200,
            scale: 2,
            rotation: 360,
            borderRadius: "100%",
            duration: 2,
            ease: "back.inOut"
        })
        timeline.to("#yellow-box", {
            x: 400,
            rotation: 360,
            borderRadius: "100%",
            duration: 2,
            ease: "back.inOut"
        })
        timeline.to("#yellow-box", {
            x: 600,
            y: 0,
            scale: 1,
            rotation: 360,
            borderRadius: "8px",
            duration: 2,
            ease: "back.inOut"
        })
    }, [])

    function playPause() {
        if (timeline.paused()) {
            timeline.play();
        } else {
            timeline.play();
        }
    }

    return (
        <main>
            <p className="mt-5 text-gray-500">
                The <code>gsap.timeline()</code> method allows you to create a sequence of animations that play one
                after another, or overlap. This method is useful for orchestrating complex animations by chaining
                multiple tweens together.
            </p>
            <p className="mt-5 text-gray-500">
                A <code>gsap.timeline()</code> instance can be used to define a series of animations with specific
                timings and easing functions, making it easier to manage and synchronize multiple animations. You can
                add animations using the <code>.to()</code>, <code>.from()</code>, or <code>.fromTo()</code> methods,
                and control their order and timing with various timeline methods.
            </p>
            <p className="mt-5 text-gray-500">
                Read more about the{" "}
                <a href="https://greensock.com/docs/v3/GSAP/TimelineLite" target="_blank"
                   rel="noreferrer noopener nofollow">
                    gsap.timeline()
                </a>{" "}method.
            </p>

            <div className="mt-20">
                <button onClick={() => {
                    if (timeline.paused()) {
                        timeline.play();
                    } else {
                        timeline.play();
                    }
                }}>Play/Pause
                </button>
                <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg"/>
            </div>
        </main>
    )
}

export default GsapTimeline;