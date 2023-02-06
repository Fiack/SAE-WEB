const menuHamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".navLinks")
const croix = document.querySelector(".croix")
const homeBlanc = document.querySelector(".homeBlanc")
const homeNoir = document.querySelector(".homeNoir")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobileMenu')
menuHamburger.classList.toggle('open')
homeBlanc.classList.toggle('open')     
croix.classList.toggle('close')
homeNoir.classList.toggle('close')
})

croix.addEventListener('click',()=>{
navLinks.classList.toggle('mobileMenu')
menuHamburger.classList.toggle('open')
homeBlanc.classList.toggle('open')  
croix.classList.toggle('close')
homeNoir.classList.toggle('close')
})