window.addEventListener('scroll',function(){
    let navContainer = document.querySelector('.nav_container')
    let appBar = document.querySelector('.burger-menu')
    navContainer.classList.toggle('sticky',window.scrollY > 0)
    appBar.classList.toggle('sticky',window.scrollY > 0)
})

function toggleMenu(){
    let menuToggle = document.querySelector('.toggle')
    let menu = document.querySelector('.menu')
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}