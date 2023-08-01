document.querySelector('header .menu').addEventListener('click', ()=>{
    document.querySelector('.nav-mobile').classList.toggle('nav-mobile-hidden')
})
document.querySelectorAll('.nav-mobile').forEach((el)=>{
    el.addEventListener('click', ()=>{
        document.querySelector('.nav-mobile').classList.toggle('nav-mobile-hidden')
    })
})
document.querySelector('footer .our-services').addEventListener('click', (e)=>{
    e.preventDefault()
})

const gridContainer = document.querySelectorAll('[data-anime]');

function animateContainer(){
    let windowTop = window.pageYOffset + (window.innerHeight * 0.85)
    gridContainer.forEach((el)=>{
        if(windowTop > el.offsetTop){
            el.classList.add('animate')
        }
        else{
            el.classList.remove('animate')
        }
    })
}

animateContainer();

window.addEventListener('scroll', function(){
    animateContainer()
})




