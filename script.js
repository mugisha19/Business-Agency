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