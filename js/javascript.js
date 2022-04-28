const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');
const menuX = document.querySelector('.btn-x')
menuIcon.addEventListener('click', clickShow)
menuX.addEventListener('click', clickShowX)
function clickShow(event){
    menuList.classList.toggle('_active');
    menuX.toggleAttribute('hidden')
}
function clickShowX(){
    menuList.classList.toggle('_active');
    menuX.toggleAttribute('hidden')
}






/// footer
const arrowOne = document.querySelector('.arrow_1')
const arrowTwo = document.querySelector('.arrow_2')
const arrowThree = document.querySelector('.arrow_3')
const arrowFour = document.querySelector('.arrow_4')
const arrowFive = document.querySelector('.arrow_5')
const footerH2 = document.querySelectorAll('.footer-column h2')
const footerOneColumn = document.querySelector('.footer-one-column__one')
const footerTwoColumn = document.querySelector('.footer-two-column__one')
const footerThreeColumn = document.querySelector('.footer-three-column__one')
const footerFourColumn = document.querySelector('.footer-four-column__one')
const footerFiveColumn = document.querySelector('.footer-five-column__one')



document.addEventListener('click',clickArrow)
function clickArrow(event){
    if (event.target.closest('.arrow_1')) {
        footerOneColumn.nextElementSibling.classList.toggle('_active-column');
        arrowOne.classList.toggle('_active-arrow')
    }
    if (event.target.closest('.arrow_2')) {
        footerTwoColumn.nextElementSibling.classList.toggle('_active-column');
        arrowTwo.classList.toggle('_active-arrow')
    }
    if (event.target.closest('.arrow_3')) {
        footerThreeColumn.nextElementSibling.classList.toggle('_active-column');
        arrowThree.classList.toggle('_active-arrow')
    }
    if (event.target.closest('.arrow_4')) {
        footerFourColumn.nextElementSibling.classList.toggle('_active-column');
        arrowFour.classList.toggle('_active-arrow')
    }
    if (event.target.closest('.arrow_5')) {
        footerFiveColumn.nextElementSibling.classList.toggle('_active-column');
        arrowFive.classList.toggle('_active-arrow')
    }
    
}

const scroll = document.querySelector('.scroll');
document.addEventListener('scroll',function(event){
    if(window.scrollY >= 1268){
        scroll.classList.add('_active-scroll')
    }
    if(window.scrollY <= 1268){
        scroll.classList.remove('_active-scroll')
    }
})

function scrollArrow(event){
    let a = document.scrollY
    if(event.scrollY == 1000){
        console.log('прошло 1000px')
    }
} 
// console.log(document.clientY) 