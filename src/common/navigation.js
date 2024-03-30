import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import variables from "../styles/scss/variables.module.scss";

export const navigation = () => {
    gsap.registerPlugin(ScrollTrigger);

    const showAnim = gsap.from('.mil-top-panel.mil-animated', {
        yPercent: -100,
        paused: true,
        duration: 0.4,
    }).progress(1);

    ScrollTrigger.create({
        start: "top top",
        end: 99999999,
        onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse();
        }
    });

    const showColor = document.querySelectorAll(".mil-top-panel.mil-transparent-nav");

    showColor.forEach((section) => {
        gsap.fromTo(
            section, {
                ease: 'sine',
                backgroundColor: 'rgba(38, 50, 56, 0)',
            }, {
                backgroundColor: variables.darkColor,
                scrollTrigger: {
                    start: "top -100, top",
                    end: 99999,
                    toggleClass: 'active',
                }
            }
        );
    });
}