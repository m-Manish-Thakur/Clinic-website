

let loader = setInterval(()=>{
    document.getElementById('preloader').style.display = 'none';
    window.addEventListener('load', ()=>{
        document.getElementById('preloader').style.display = 'none';
    });
}, 2000)


let menuIcon = document.getElementById('menuIcon');
let closeMenuIcon= document.getElementById('closeMenuIcon');
let menu = document.getElementById('menuBox');


menuIcon.onclick = function (){
    menu.classList.toggle('openMenu');
}
function close_menu(){
    menu.classList.toggle('openMenu');
}


document.getElementById('search_icon').onclick = function(){
    document.getElementById('search_input').style.width = '300px';
    document.getElementById('search_input').style.padding = '8px 10px';
    document.getElementById('search_input').style.border = '0.5px solid rgb(222, 222, 222)';
}

document.addEventListener('click', function(event){
    if (event.target.closest("#search_icon")) return;
    if (event.target.closest("#search_input")) return;

    document.getElementById('search_input').style.width = '0px';
    document.getElementById('search_input').style.padding = '0';
    document.getElementById('search_input').style.border = 'none';
});









// **********************    Specification       ***********************************//



function openSecondAbout()
{
    document.getElementById('first_about').style.display = 'none';
    document.getElementById('sec_about').style.display = 'flex';
    document.getElementById('about_btn1').style.color = 'var(--gray_text)';
    document.getElementById('about_btn2').style.color = 'var(--royalblue)';
}
function openFirstAbout(){
    document.getElementById('first_about').style.display = 'flex';
    document.getElementById('sec_about').style.display = 'none';
    document.getElementById('about_btn1').style.color = 'var(--royalblue)';
    document.getElementById('about_btn2').style.color = 'var(--gray_text)';
   
}






// **********************    TESTIMONIAL Slider      **********************************//


let btn = document.getElementsByClassName('btn');
let slide = document.getElementById('slide');

btn[0].onclick = function(){
    slide.style.transform = 'translateX(0)';
    slide.style.transition = '0.7s linear';
    btn[0].classList.add('active');
    btn[1].classList.remove('active');
    btn[2].classList.remove('active');

}

btn[1].onclick = function(){
    slide.style.transform = 'translateX(-100%)';
    slide.style.transition = '0.7s linear';
    btn[1].classList.add('active');
    btn[0].classList.remove('active');
    btn[2].classList.remove('active');
}

btn[2].onclick = function(){
    slide.style.transform = 'translateX(-200%)';
    slide.style.transition = '0.7s linear';
    btn[2].classList.add('active');
    btn[0].classList.remove('active');
    btn[1].classList.remove('active');
    
}










// **********************    Equipment Scroll      **********************************//



let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

let eqp1 = document.getElementById('firstEqp');
let eqp2 = document.getElementById('secondEqp');
let eqp3 = document.getElementById('thirdEqp');

btn2.onclick = function(){
    eqp1.style.display = 'none';
    eqp2.style.display = 'flex';
    eqp3.style.display = 'none';
    btn2.style.backgroundColor = 'var(--royalblue)';
    btn1.style.backgroundColor = 'rgb(191, 191, 191)';
    btn3.style.backgroundColor = 'rgb(191, 191, 191)';
}
btn1.onclick = function(){
    eqp1.style.display = 'flex';
    eqp2.style.display = 'none';
    eqp3.style.display = 'none';
    btn1.style.backgroundColor = 'var(--royalblue)';
    btn2.style.backgroundColor = 'rgb(191, 191, 191)';
    btn3.style.backgroundColor = 'rgb(191, 191, 191)';
}
btn3.onclick = function(){
    eqp1.style.display = 'none';
    eqp2.style.display = 'none';
    eqp3.style.display = 'flex';
    btn3.style.backgroundColor = 'var(--royalblue)';
    btn1.style.backgroundColor = 'rgb(191, 191, 191)';
    btn2.style.backgroundColor = 'rgb(191, 191, 191)';
}



