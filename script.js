// import Swiper from 'swiper/swiper-bundle.mjs';
// import 'swiper/swiper-bundle.css';

// Navbar 
const menuEl = document.querySelector('.menu');
const navbarEl = document.querySelector('.navbar');
const bar = document.querySelector ('.video-bar')

menuEl.addEventListener ('click', () => {
    navbarEl.classList.toggle('change')
    menuEl.classList.toggle('change')
})
// End Of Navbar

// Section 2

const videoEl = document.querySelector('.video');
const buttonEl = document.querySelector('.buttons i');

buttonEl.addEventListener('click', () => {
    playPause();
    videoEl.classList.toggle('change-video')
})


const playPause = () => {
    
    if (videoEl.paused) {
        videoEl.play();
        buttonEl.className = 'far fa-pause-circle';
    } else if (videoEl.play) {
        videoEl.pause();
        buttonEl.className = 'far fa-play-circle';
    }
}


videoEl.addEventListener ('timeupdate', () => {
    const barWidth = videoEl.currentTime / videoEl.duration;
    bar.style.width = `${barWidth * 100}%`;

    if (videoEl.ended) {
        buttonEl.className = 'far fa-play-circle';
        videoEl.style.opacity = '.3';
    }
})

// End Of Section 2

// Section pricing cards


var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});




// End Of Section pricing cards