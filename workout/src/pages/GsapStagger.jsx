import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

const GsapStagger = () => {
    useGSAP(() => {
        gsap.to(".stagger-box", {
            y: 250,
            rotation: 360,
            borderRadius: "100%",
            repeat: -1,
            yoyo: true,
            // stagger: 0.5,
            stagger: {
                amount: 1.5,
                grid: [2, 1],
                ease: "circ.inOut",
                from: "center",
            }
        })
    }, [])
    return (
        <main>
            <h1>GsapStaggerr</h1>

            <p className="mt-5 text-gray-500">
                The <code>gsap.stagger</code> utility is used to create staggered animations for multiple elements. This
                means you can animate a sequence of elements with a delay between each one, creating a cascading or
                staggered effect.
            </p>

            <p className="mt-5 text-gray-500">
                The <code>gsap.stagger</code> functionality can be applied in various ways, including:
            </p>

            <p className="mt-5 text-gray-500">
                For more detailed information, read about the <a
                href="https://greensock.com/docs/v3/GSAP/gsap.stagger()"
                target="_blank"
                rel="noreferrer noopener nofollow">gsap.from()</a> method.
            </p>

            <div className="mt-20">
                <div className="flex gap-5">
                    <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box"/>
                    <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box"/>
                    <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box"/>
                    <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box"/>
                    <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box"/>
                    <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box"/>
                    <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box"/>
                </div>
            </div>
        </main>
    )
}

export default GsapStagger;