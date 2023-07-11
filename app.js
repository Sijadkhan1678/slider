
// Get DOM Elements
const slides = document.querySelectorAll('.slides');
const btn1 = document.querySelector('.btn0')
const btn2 = document.querySelector('.btn1')
const btn3 = document.querySelector('.btn2')
const slideNavigators = document.querySelectorAll('.slideNavigator')


btn1.addEventListener('click', function (e) {

    let slideCounter = e.target.className.slice(18, 19);

    slides.forEach(slide => slide.style.transform = `translateX(-${slideCounter * 100}%)`)

    slideNavigators.forEach((slideNavigator, index) => {

        slideNavigator.style.backgroundColor = index == slideCounter ? '#66004d' : ''
    })

})

btn2.addEventListener('click', function (e) {

    let slideCounter = e.target.className.slice(18, 19);

    slides.forEach(slide => slide.style.transform = `translateX(-${slideCounter * 100}%)`)

    slideNavigators.forEach((slideNavigator, index) => {

        slideNavigator.style.backgroundColor = index == slideCounter ? '#66004d' : ''
    })

})

btn3.addEventListener('click', function (e) {

    let slideCounter = e.target.className.slice(18, 19);

    slides.forEach(slide => slide.style.transform = `translateX(-${slideCounter * 100}%)`)

    slideNavigators.forEach((slideNavigator, index) => {

        slideNavigator.style.backgroundColor = index == slideCounter ? '#66004d' : ''
    })

})
