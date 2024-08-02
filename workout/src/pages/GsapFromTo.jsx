import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

const GsapFromTo = () => {
    useGSAP(
        () => {
            gsap.fromTo("#red-box",
                { // To
                    x: 0,
                    rotation: 0,
                    borderRadius: "0%",
                },
                { // From
                    x: 250,
                    repeat: -1,
                    yoyo: true,
                    borderRadius: "100%",
                    rotation: 360,
                    duration: 2,
                    ease: "power1.inOut",
                });
        },
        []
    )
    return (
        <main>
            <h1>GsapFromTo</h1>

            <p className="mt-5 text-gray-500">
                The <code>gsap.from()</code> method is used to animate
                element from a new state to their new state
            </p>
            <p className="mt-5 text-gray-500">
                The <code>gsap.from()</code> method is similar to the {" "}
                <code>gsap.to()</code> and <code>gsap.from()</code> methods,
                but the different is that the
                {" "} <code>gsap.fromTo()</code> method animates elements from a
                new state to a new state, while the <code>gsap.to()</code> method
                animates from their current state to a new state and <code>gsap.from()</code>
                method animates from their new state to their current state.
            </p>

            <p className="mt-5 text-gray-500">
                Read more about the {" "}
                <a href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
                   target="_blank"
                   rel="noreferrer noopener nofollow">
                    gsap.from()
                </a>{" "}method.
            </p>

            <div className="mt-20">
                <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg"/>
            </div>
        </main>
    )
}

export default GsapFromTo;