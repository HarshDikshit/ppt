const tl = gsap.timeline()
tl
.from('.logo',{
    y:-100
})
.from('nav div h1',{
    y:-100,
    stagger:0.1
})
.from('nav div button',{
    y:-100,
    stagger:0.1
})
.from('.left-part h1',{
    x:-100,
    opacity:0,
    stagger:0.3
})
.from('.right-part',{
    x:100,
    opacity:0,
    stagger:0.3
})
.from('.inner-wrapper',{
    x:100,
    opacity:0,
    stagger:0.3
})

gsap.set('.nav-it',{
    opacity:0
})
document.querySelector('#menu').addEventListener('click',()=>{
    gsap.from('.nav-it',{
        x:'200%',
        opacity:0
    })
})


