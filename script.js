const menuHamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".navLinks")
const croix = document.querySelector(".croix")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobileMenu')
menuHamburger.classList.toggle('open')
croix.classList.toggle('close')
})

croix.addEventListener('click',()=>{
navLinks.classList.toggle('mobileMenu')
menuHamburger.classList.toggle('open')
croix.classList.toggle('close')
})