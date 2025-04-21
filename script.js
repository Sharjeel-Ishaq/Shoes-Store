

gsap.set(".a", { opacity: 0, y: 10 })
gsap.set("#right img", { opacity: 0, scale: 1.6 })



var tl = gsap.timeline();
tl
.from("#left", {
    width: 0,
    ease: Expo.easeInOut,
    duration: 1.5
})

.from("#right", {
    width: 0,
    ease: Expo.easeInOut,
    duration: 1.5
})

    .to(".a", {
        delay: -2,
        opacity: 1,
        stagger:.2,
        y: 0,
        ease: Expo.easeInOut,
        duration: 1.3
    })
    .to("#right img", {
        opacity: 1,
        scale:1,
        ease: Expo.easeInOut,
        duration: 1.9
    })
