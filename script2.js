var tl = gsap.timeline();

gsap.set(".a", {opacity:0, y:10 })
gsap.set("#right img",{ opacity:0, scale: 1.6 })

tl
.from("#left",{
    width: 0,
    ease:Expo.easeInOut,
    duration:2
})

.from("#right",{
    width: 0,
    ease:Expo.easeInOut,
    duration:2
})

.to(".a",{
    opacity: 1,
    stagger: .2,
    delay: -2,
    y:0,
    ease:Expo.easeInOut,
    duration:2
})

.to("#right img",{
    opacity: 1,
    scale:1,
    ease:Expo.easeInOut,
    duration:1
})