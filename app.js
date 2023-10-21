
// Get DOM Elements
const slides = document.querySelectorAll('.slides');
const btn1 = document.querySelector('.btn0')
const btn2 = document.querySelector('.btn1')
const btn3 = document.querySelector('.btn2')
const slideNavigators = document.querySelectorAll('.slideNavigator');
let counter = 0
// Detect slider to reach its last slide
let is_Slider_Reached = false
console.log("slides" + slides[0].style)


function slide_Image(e = 1 || e) {

    if (typeof e.target === 'object') {

        let slideCounter = e.target.className.slice(18, 19);

        let iterator = 0

        for (iterator; iterator < slides.length; iterator++) {
            slides[iterator].style.transform = `translateX(-${slideCounter * 100}%)`
            slideNavigators[iterator].style.backgroundColor = iterator == slideCounter ? '#66004d' : ''
        }

        // slides.forEach(slide => slide.style.transform = `translateX(-${slideCounter * 100}%)`)

        // slideNavigators.forEach((slideNavigator, index) => {

        //     slideNavigator.style.backgroundColor = index == slideCounter ? '#66004d' : ''
        // })
    }
    else {

        let slideCounter = e
        let iterator = 0

        for (iterator; iterator < slides.length; iterator++) {

            slides[iterator].style.transform = `translateX(-${slideCounter * 100}%)`
            slideNavigators[iterator].style.backgroundColor = iterator == slideCounter ? '#66004d' : ''
        }
        // slides.forEach(slide => slide.style.transform = `translateX(-${slideCounter * 100}%)`)

        // slideNavigators.forEach((slideNavigator, index) => {

        //     slideNavigator.style.backgroundColor = index == slideCounter ? '#66004d' : ''
        // })
    }


}

function slide_Automator() {

    if (!is_Slider_Reached) {
        counter++
    }

    if (counter === 3 || is_Slider_Reached) {

        counter--
        is_Slider_Reached = true;

        if (counter === 0) {
            is_Slider_Reached = false;
        }

    }

    slide_Image(counter)


}

// Automate sliding
setInterval(slide_Automator, 2500)

// Adding DOM Event listener
btn1.addEventListener('click', slide_Image)

btn2.addEventListener('click', slide_Image)

btn3.addEventListener('click', slide_Image)
