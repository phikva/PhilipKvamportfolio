gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();


tl.from(".content", {
    y: ".30%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
})
tl.from(".stagger", {
    y: -50,
    stagger: .3,
    opacity: 0,
    duration: 1.5,
    ease: Power4.easeOut
}, "-=1.5")


const scrollAnimations = gsap.utils.toArray('.scrollani');
scrollAnimations.forEach(scrollani => {
    gsap.from(scrollani, {
        y:50,
        opacity: 0,
        duration: 1.5,
        stagger: .5,
        scrollTrigger: {
            trigger: scrollani
           
        }
    })
});


gsap.timeline({
    scrollTrigger: {
        trigger: scrollAnimations,
        start: "top bottom",
        scrub: true
        
    }
})




