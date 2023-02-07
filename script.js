const menuHamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".navLinks")
const croix = document.querySelector(".croix")
const homeBlanc = document.querySelector(".homeBlanc")
const homeNoir = document.querySelector(".homeNoir")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('open')
menuHamburger.classList.toggle('open')
homeBlanc.classList.toggle('open')     
croix.classList.toggle('open')
homeNoir.classList.toggle('open')
})

croix.addEventListener('click',()=>{
navLinks.classList.toggle('open')
menuHamburger.classList.toggle('open')
homeBlanc.classList.toggle('open')  
croix.classList.toggle('open')
homeNoir.classList.toggle('open')
})



const header = document.querySelector("header")
last = 0;

window.addEventListener('scroll', function() {
    act = window.scrollY;
    if(act > 150 && !menuHamburger.classList.contains("open") ){
        if(act > last){
            header.classList.add("cacher");
        }
        else{
            header.classList.remove("cacher");
        }
    }
    last = act;
});