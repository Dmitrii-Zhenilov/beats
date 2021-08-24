const hamburger = document.querySelector('.hamburger');
const fullscreenMenu = document.querySelector('.fullscreen-menu');
const fullscreenMenuClose = document.querySelector('.fullscreen-menu__close');

hamburger.addEventListener('click', e=> {
    e.preventDefault();
    fullscreenMenu.style.display = 'flex';
});

 fullscreenMenuClose.addEventListener('click', e=> {
    fullscreenMenu.style.display = 'none';
});
