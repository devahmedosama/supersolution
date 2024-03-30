import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

export const scrollAnimation = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    //appearance

    const appearance = document.querySelectorAll(".mil-appearance");

    appearance.forEach((section) => {
        gsap.fromTo(section, {
            opacity: 0,
            y: 50,
            scale: .98,
            ease: 'sine',
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: section,
                toggleActions: 'play none none reverse',
            }
        });
    });

    //scale

    const scaleImage = document.querySelectorAll(".mil-scale-img");

    scaleImage.forEach((section) => {
        var value1 = section.getAttribute('data-value-1');
        var value2 = section.getAttribute('data-value-2');
        gsap.fromTo(section, {
            ease: 'sine',
            scale: value1,

        }, {
            scale: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    //parallax

    const parallaxImage = document.querySelectorAll(".mil-parallax-img");

    parallaxImage.forEach((section) => {
        var value1 = section.getAttribute('data-value-1');
        var value2 = section.getAttribute('data-value-2');
        gsap.fromTo(section, {
            ease: 'sine',
            y: value1,

        }, {
            y: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    //rotate

    const rotate = document.querySelectorAll(".mil-rotate");

    rotate.forEach((section) => {
        var value = section.dataset.value;
        gsap.fromTo(section, {
            ease: 'sine',
            rotate: 0,

        }, {
            rotate: value,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    //travel x

    const travelX = document.querySelectorAll(".mil-travel-x");

    travelX.forEach((section) => {
        var value = section.dataset.value;
        gsap.fromTo(section, {
            ease: 'sine',
            x: 0,

        }, {
            x: value,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    //travel y

    const travelY = document.querySelectorAll(".mil-travel-y");

    travelY.forEach((section) => {
        var value = section.dataset.value;
        gsap.fromTo(section, {
            ease: 'sine',
            y: 0,

        }, {
            y: value,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    //dissolve

    const dissolve = document.querySelectorAll(".mil-dissolve");

    dissolve.forEach((section) => {
        gsap.fromTo(section, {
            opacity: 1,
            ease: 'linear',

        }, {
            opacity: 0,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                start: 'top-=600',
                end: 'bottom-=100',
            }
        });
    });
}