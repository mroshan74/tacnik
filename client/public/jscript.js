window.addEventListener('scroll',function(){
    let navContainer = document.querySelector('.nav_container')
    let appBar = document.querySelector('.burger-menu')
    navContainer.classList.toggle('sticky',window.scrollY > 0)
    appBar.classList.toggle('sticky',window.scrollY > 0)
})