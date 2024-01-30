// //  ------------------toggle icon navbar-------------

let cross = document.getElementById('cross')
let hamBurger = document.getElementById('hamBurger')
let navbar = document.getElementById('navbar')

hamBurger.addEventListener('click' , function(){
  navbar.classList.add('top')
} )

cross.addEventListener('click' , function(){
    return navbar.classList.remove('top')
} )
// let cross = document.getElementById('cross')
// let hamBurger = document.getElementById('hamBurger')
// let main_nav = document.getElementById('main_nav')

// hamBurger.addEventListener('click' , function(){
//     return main_nav.classList.add('top')
// } )

// cross.addEventListener('click' , function(){
//     return main_nav.classList.remove('top')
// } )


// let menuicon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuicon.onclick = () => {
//   menuicon.classList.toggle('<ion-icon name="close-outline"></ion-icon>');
//   navbar.classList.toggle('active');
// }





//  ------------------scroll section active link-------------

let sections = document.querySelectorAll('section');
let navLinks= document.querySelector('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id =sec.getAttributs('id');

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classlist.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classlist.add('active');
        });
    };
  });
    
//  ------------------scroll section active link-------------

       let header = document.querySelector('header');

       header.classlist.toggle('sticky', window.scrollY > 100);
};









// let n =  document.getElementById('navbar')

// let ico = document.getElementById('icon1')

// ico.addEventListener('click', function(){

//   return n.classList.toggle('navbar2')
// })

// let l = document.getElementById('main')

// l.addEventListener('click' , function (){
//   return l.classList.toggle('main2')
// })