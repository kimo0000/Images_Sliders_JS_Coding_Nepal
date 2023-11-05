const wrapper = document.querySelector('.wrapper');
const carousel = document.querySelector('.carousel');
const imgs = document.querySelectorAll('.carousel img');
const btns = document.querySelectorAll('.wrapper i');

let counterImg = 0;
let timer;

const sliderAuto = () => {
    timer = setInterval(() => sliderImg(++counterImg), 2000);
}

sliderAuto();

const sliderImg = () => {
    counterImg = counterImg > imgs.length -1 ? counterImg = 0: counterImg < 0 ? counterImg = imgs.length -1 : counterImg;
    // console.log(counterImg, imgs.length);
    carousel.style.transform = `translateX(-${counterImg*100}%)`;
}

btns.forEach(btn => {
    btn.addEventListener('click',() => {
        clearInterval(timer);
        counterImg += btn.id === "next" ? 1 : -1;
        sliderImg();
        // sliderAuto();
        // console.log(counterImg); 
    })
})

wrapper.addEventListener('mouseenter',() => {
    clearInterval(timer);
    console.log("Clear Interval wrapper");
});
wrapper.addEventListener("mouseleave", sliderAuto);