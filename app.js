
// Get DOM Elements
const slides = document.querySelectorAll('.slides');
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')


btn1.addEventListener('click', function (e) {

    slides[2].style.transform = 'translateX(0%)';
    slides[1].style.transform = 'translateX(0%)';
    slides[0].style.transform = 'translateX(0%)';
    btn1.style.backgroundColor = '#66004d';
    btn3.style.backgroundColor = ''
    btn2.style.backgroundColor = '';

})

btn2.addEventListener('click', function (e) {

    slides[0].style.transform = 'translateX(-100%)';
    slides[1].style.transform = 'translateX(-100%)';
    slides[2].style.transform = 'translateX(-100%)';
    btn2.style.backgroundColor = '#66004d';
    btn3.style.backgroundColor = ''
    btn1.style.backgroundColor = '';
        

})

btn3.addEventListener('click', function (e) {

    if (e.target.className.slice(4, 8) == 'btn3') {

        slides[0].style.transform = 'translateX(-200%)';
        slides[2].style.transform = 'translateX(-200%)';
        slides[1].style.transform = 'translateX(-200%)';
        btn3.style.backgroundColor = '#66004d'
        btn1.style.backgroundColor = '';
        btn2.style.backgroundColor = '';

    }
})


