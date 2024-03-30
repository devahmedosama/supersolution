import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const countersAnimation = () => {
    const number = document.querySelectorAll('.mil-counter');

    gsap.registerPlugin(ScrollTrigger)

    number.forEach( (element) => {
        const count = element,
            zero = {
                val: 0
            },
            num = count.dataset.number,
            split = (num + "").split("."), // to cover for instances of decimals
            decimals = split.length > 1 ? split[1].length : 0;

        gsap.to(zero, {
            val: num,
            duration: 2,
            ScrollTrigger: {
                trigger: count,
                toggleActions: 'play none none reverse',
            },
            onUpdate: function () {
                count.innerHTML = zero.val.toFixed(decimals);
            }
        });
    });
}