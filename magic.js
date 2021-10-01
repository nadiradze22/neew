var scrollUp = document.querySelector('.scroll-up');
var Navbar = document.querySelector('nav');
var white = document.querySelector('.fa-sun');
var black = document.querySelector('.fa-moon');
var Cont = document.querySelector('.container');
var New = document.querySelector('.news');

white.addEventListener('click', ()=> {
Cont.style.background = 'white';
New.style.background = 'white';
Cont.style.transition = '1s'
})


black.addEventListener('click', ()=> {
   Cont.style.background = 'black';
   New.style.background =  'black';
   Cont.style.transition = '1s'
   })



 scrollUp.addEventListener('click', function(){
     window.scrollTo(0,0),
     scrollbehivior = 'smooth';
 });

 window.addEventListener('scroll', ()=>{
     var scrolled = this.scrollY;
     if(scrolled > 300){
        scrollUp.style.opacity = '1'
        scrollUp.style.top = '70%'
        Navbar.style.display = 'none'
     }else{
        scrollUp.style.opacity = '0'
        scrollUp.style.top = '0'
        Navbar.style.display = 'flex'
     }
 })



