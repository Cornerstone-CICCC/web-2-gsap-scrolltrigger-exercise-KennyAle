gsap.registerPlugin(ScrollTrigger)

const firstLine = gsap.timeline(
    {
    scrollTrigger: {
        trigger: '.line-one',
        start: 'bottom bottom',
        pin: true,
        scrub: true
    }
}
)

firstLine.from('.line-one span', { y: '100vh', duration: .3, stagger: .2 })
    .to('body', { backgroundColor: 'yellow', duration: .3 })
    .from('.sun', { right: '-150px', duration: .3 })
    .to('.line-one span', { x: '100vw', duration: .3 })
    .to('.sun', { x: '-100vw', duration: .3 }, '<')
    .to('body', { backgroundColor: '', duration: .3 }, '<')

const secondLine = gsap.timeline(
    {
        scrollTrigger: {
            trigger: '.line-two',
            start: 'top top',
            pin: true,
            scrub: true
        }
    }
)

secondLine.from('.line-two span', {scale: '100', duration: 1})
.to('.line-two span', {y: '-10vh', duration: .3, stagger: .2})

const thirdLine = gsap.timeline(
    {
        scrollTrigger: {
            trigger: '.line-three',
            start: 'bottom bottom',
            pin: true,
            scrub: true
        }
    }
)

thirdLine.from('.line-three span', { y: '100vh', duration: .3, stagger: .2 })
.to('.line-three span', { color: 'white', duration: .3 })
.to('.line-three', {backgroundPositionX: '0', duration: .3}, '<')
.from('.moon', { right: '-150px', duration: .3 })
