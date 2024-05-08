const slides = document.querySelectorAll(".slide")
var counter = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    });
const goPrev = () => {
    counter--

    slideImage()
}
const goNext = () => {
    counter++

    slideImage()
}


const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
const slidees = document.querySelectorAll(".slid")
var counters = 0;
slidees.forEach(
    (slid, index) => {
        slid.style.left = `${index * 100}%`
    });
const goprev = () => {
    counters--

    slidImage()
}
const gonext = () => {
    counters++

    slidImage()
}


const slidImage = () => {
    slidees.forEach(
        (slid) => {
            slid.style.transform = `translateX(-${counters * 100}%)`
        }
    )
}

const slidess = document.querySelectorAll(".slidi")
var next = 0;
slidess.forEach(
    (slidi, index) => {
        slidi.style.left = `${index * 100}%`
    });
const goback = () => {
    next--

    slidiImage()
}
const goage = () => {
    next++

    slidiImage()
}


const slidiImage = () => {
    slidess.forEach(
        (slidi) => {
            slidi.style.transform = `translateX(-${next * 100}%)`
        }
    )
}
const sledess = document.querySelectorAll(".slidie")
var next1 = 0;
sledess.forEach(
    (slidie, index) => {
        slidie.style.left = `${index * 100}%`
    });
const goback1 = () => {
    next1--

    slidieImage()
}
const goage1 = () => {
    next1++

    slidieImage()
}


const slidieImage = () => {
    sledess.forEach(
        (slidie) => {
            slidie.style.transform = `translateX(-${next1 * 100}%)`
        }
    )
}
const sledess1 = document.querySelectorAll(".slidie1")
var next2 = 0;
sledess1.forEach(
    (slidie1, index) => {
        slidie1.style.left = `${index * 100}%`
    });
const goback2 = () => {
    next2--

    slidie1Image()
}
const goage2 = () => {
    next2++

    slidie1Image()
}


const slidie1Image = () => {
    sledess1.forEach(
        (slidie1) => {
            slidie1.style.transform = `translateX(-${next2 * 100}%)`
        }
    )
}


//new

const slides1 = document.querySelectorAll(".slidie2")
var counter2 = 0;
slides1.forEach(
    (slidie2, index) => {
        slidie2.style.left = `${index * 100}%`
    });
const gobackA = () => {
    counter2--

    slidie2Image()
}
const goageA = () => {
    counter2++

    slidie2Image()
}


const slidie2Image = () => {
    slides1.forEach(
        (slidie2) => {
            slidie2.style.transform = `translateX(-${counter2 * 100}%)`
        }
    )
}

const book = document.querySelectorAll(".stick1A")
var counter2a = 0;
book.forEach(
    (stick1A, index) => {
        stick1A.style.left = `${index * 100}%`
    });
const gobook1 = () => {
    counter2a--

    stick1AImage()
}
const gobook2 = () => {
    counter2a++

    stick1AImage()
}


const stick1AImage = () => {
    book.forEach(
        (stick1A) => {
            stick1A.style.transform = `translateX(-${counter2a * 100}%)`
        }
    )
}