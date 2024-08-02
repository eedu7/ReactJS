import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/all";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const GsapScrollTrigger = () => {

    const scrollRel = useRef();

    useGSAP(
        
    )
    return (
        <main>
            <h1>GsapScrollTrigger</h1>

            <p className="mt-5 text-gray-500">
                The <code>ScrollTrigger</code> plugin, part of the GSAP (GreenSock Animation Platform) suite, enables
                animations that are triggered by the scroll position of a webpage. This powerful tool allows for the
                creation of scroll-driven animations that can enhance the user experience by syncing animations with
                scrolling events.
            </p>

            <p className="mt-5 text-gray-500">
                The <code>ScrollTrigger</code>{" "} plugin works by monitoring the scroll position and triggering
                animations
                at specified points as the user scrolls through the page. You can set up triggers based on the position
                of elements, the scroll position of the viewport, or even the scroll progress of the entire document.
            </p>

            <p className="mt-5 text-gray-500">
                With <code>ScrollTrigger</code>, you can create a variety of effects, such as pinning elements in place
                during scroll, creating scroll-based parallax effects, and animating elements as they enter or leave the
                viewport. This plugin greatly enhances the interactivity and dynamism of web pages.
            </p>

            <p className="mt-5 text-gray-500">
                To get started with <code>ScrollTrigger</code>, you can refer to the official documentation and examples
                provided by GSAP. This will guide you through setting up and customizing scroll-based animations
                effectively.
            </p>
        </main>
    );
}
