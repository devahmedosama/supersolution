import { gsap } from "gsap";
import variables from "../styles/scss/variables.module.scss";

export const cursorAnimation = () => {
    const cursor = document.querySelector('.mil-cursor');
    const cursorWord1 = document.querySelector('.mil-cursor .mil-word-1');
    const cursorWord2 = document.querySelector('.mil-cursor .mil-word-2');
    const cursorIcon1 = document.querySelector('.mil-cursor .mil-icon-1');
    const cursorIcon2 = document.querySelector('.mil-cursor .mil-icon-2');
    const cursorIcon3 = document.querySelector('.mil-cursor .mil-icon-3');

    gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
    });
  
    //follower
    document.addEventListener('pointermove', (event) => {
      gsap.to(cursor, {
        duration: 0.6,
        ease: 'sine',
        x: event.clientX,
        y: event.clientY,
      });
    });
  
    //click and drag
    const body = document.querySelector('body');

    body.addEventListener('mousedown', (event) => {
      gsap.to(cursor, .2, {
          scale: .7,
          boxShadow: '0px 0px 0px 10px rgba(255,255,255,.4)',
          ease: 'sine',
      });
    });
    body.addEventListener('mouseup', (event) => {
      gsap.to(cursor, .2, {
          scale: 1,
          boxShadow: '0px 0px 0px 5px rgba(255,255,255,0)',
          ease: 'sine',
      });
    });

    //accent color
    const accent = document.querySelectorAll('.mil-accent-trigger');
    if ( accent != undefined ) {
        accent.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    background: variables.accentColor,
                    ease: 'sine',
                });
                cursor.classList.add("mil-active");
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    background: variables.darkColor,
                    ease: 'sine',
                });
                cursor.classList.remove('mil-dark');
            });
        });
    }

    //light color
    const light = document.querySelectorAll('.mil-light-trigger');
    if ( light != undefined ) {
        light.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    background: variables.lightColor,
                    ease: 'sine',
                });
                cursor.classList.add('mil-dark');
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    background: variables.darkColor,
                    ease: 'sine',
                });
                cursor.classList.remove('mil-dark');
            });
        });
    }

    //hidden
    const hidden = document.querySelectorAll('.mil-hidden-trigger');
    if ( hidden != undefined ) {
        hidden.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    width: 0,
                    height: 0,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    width: 25,
                    height: 25,
                    ease: 'sine',
                });
            });
        });
    }

    //scale down
    const scale_down = document.querySelectorAll('.mil-scale-down-trigger');
    if ( scale_down != undefined ) {
        scale_down.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    opacity: 1,
                    width: 10,
                    height: 10,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    opacity: .1,
                    width: 25,
                    height: 25,
                    ease: 'sine',
                });
            });
        });
    }

    //scale up
    const scale_up = document.querySelectorAll('.mil-scale-up-trigger');
    if ( scale_up != undefined ) {
        scale_up.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    width: 75,
                    height: 75,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    width: 25,
                    height: 25,
                    ease: 'sine',
                });
            });
        });    
    }

    //scale up with word and icons
    const scale_up_all = document.querySelectorAll('.mil-word-1-trigger, .mil-word-2-trigger, .mil-icon-1-trigger, .mil-icon-2-trigger, .mil-icon-3-trigger');
    if ( scale_up_all != undefined ) {
        scale_up_all.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    opacity: 1,
                    width: 75,
                    height: 75,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    opacity: .1,
                    width: 25,
                    height: 25,
                    ease: 'sine',
                });
            });
        });
    }

    //word 1
    const word1 = document.querySelectorAll('.mil-word-1-trigger');
    if ( word1 != undefined ) {
        word1.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursorWord1, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursorWord1, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: 'sine',
                });
            });
        });
    }

    //word 2
    const word2 = document.querySelectorAll('.mil-word-2-trigger');
    if ( word2 != undefined ) {
        word2.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursorWord2, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursorWord2, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: 'sine',
                });
            });
        });
    }

    //icon 1
    const icon1 = document.querySelectorAll('.mil-icon-1-trigger');
    if ( icon1 != undefined ) {
        icon1.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                console.log('over');
                gsap.to(cursorIcon1, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                console.log('leave');
                gsap.to(cursorIcon1, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: 'sine',
                });
            });
        });
    }

    //icon 2
    const icon2 = document.querySelectorAll('.mil-icon-2-trigger');
    if ( icon2 != undefined ) {
        icon2.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursorIcon2, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursorIcon2, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: 'sine',
                });
            });
        });
    }

    //icon 3
    const icon3 = document.querySelectorAll('.mil-icon-3-trigger');
    if ( icon3 != undefined ) {
        icon3.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursorIcon3, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursorIcon3, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: 'sine',
                });
            });
        });
    }
}

export const cursorSwiperAnimation = () => {
    const cursor = document.querySelector('.mil-cursor');
    const cursorWord1 = document.querySelector('.mil-cursor .mil-word-1');
    const cursorWord2 = document.querySelector('.mil-cursor .mil-word-2');
    const cursorIcon1 = document.querySelector('.mil-cursor .mil-icon-1');
    const cursorIcon2 = document.querySelector('.mil-cursor .mil-icon-2');
    const cursorIcon3 = document.querySelector('.mil-cursor .mil-icon-3');
  
    //accent color
    const accent = document.querySelectorAll('.swiper-container .mil-accent-trigger');
    if ( accent != undefined ) {
        accent.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    background: variables.accentColor,
                    ease: 'sine',
                });
                cursor.classList.add("mil-active");
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    background: variables.darkColor,
                    ease: 'sine',
                });
                cursor.classList.remove('mil-dark');
            });
        });
    }

    //light color
    const light = document.querySelectorAll('.swiper-container .mil-light-trigger');
    if ( light != undefined ) {
        light.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    background: variables.lightColor,
                    ease: 'sine',
                });
                cursor.classList.add('mil-dark');
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    background: variables.darkColor,
                    ease: 'sine',
                });
                cursor.classList.remove('mil-dark');
            });
        });
    }

    //hidden
    const hidden = document.querySelectorAll('.swiper-container .mil-hidden-trigger');
    if ( hidden != undefined ) {
        hidden.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    width: 0,
                    height: 0,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    width: 25,
                    height: 25,
                    ease: 'sine',
                });
            });
        });
    }

    //scale down
    const scale_down = document.querySelectorAll('.swiper-container .mil-scale-down-trigger');
    if ( scale_down != undefined ) {
        scale_down.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    opacity: 1,
                    width: 10,
                    height: 10,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    opacity: .1,
                    width: 25,
                    height: 25,
                    ease: 'sine',
                });
            });
        });
    }

    //scale up
    const scale_up = document.querySelectorAll('.swiper-container .mil-scale-up-trigger');
    if ( scale_up != undefined ) {
        scale_up.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    width: 75,
                    height: 75,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    width: 25,
                    height: 25,
                    ease: 'sine',
                });
            });
        });    
    }

    //scale up with word and icons
    const scale_up_all = document.querySelectorAll('.swiper-container .mil-word-1-trigger, .swiper-container .mil-word-2-trigger, .swiper-container .mil-icon-1-trigger, .swiper-container .mil-icon-2-trigger, .swiper-container .mil-icon-3-trigger');
    if ( scale_up_all != undefined ) {
        scale_up_all.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    opacity: 1,
                    width: 75,
                    height: 75,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    opacity: .1,
                    width: 25,
                    height: 25,
                    ease: 'sine',
                });
            });
        });
    }

    //word 1
    const word1 = document.querySelectorAll('.swiper-container .mil-word-1-trigger');
    if ( word1 != undefined ) {
        word1.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursorWord1, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursorWord1, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: 'sine',
                });
            });
        });
    }

    //word 2
    const word2 = document.querySelectorAll('.swiper-container .mil-word-2-trigger');
    if ( word2 != undefined ) {
        word2.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursorWord2, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursorWord2, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: 'sine',
                });
            });
        });
    }

    //icon 1
    const icon1 = document.querySelectorAll('.swiper-container .mil-icon-1-trigger');
    if ( icon1 != undefined ) {
        icon1.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                console.log('over');
                gsap.to(cursorIcon1, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                console.log('leave');
                gsap.to(cursorIcon1, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: 'sine',
                });
            });
        });
    }

    //icon 2
    const icon2 = document.querySelectorAll('.swiper-container .mil-icon-2-trigger');
    if ( icon2 != undefined ) {
        icon2.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursorIcon2, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursorIcon2, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: 'sine',
                });
            });
        });
    }

    //icon 3
    const icon3 = document.querySelectorAll('.swiper-container .mil-icon-3-trigger');
    if ( icon3 != undefined ) {
        icon3.forEach( (element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursorIcon3, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursorIcon3, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: 'sine',
                });
            });
        });
    }
}