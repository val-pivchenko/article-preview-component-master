const shareDesktop = document.querySelector('.share-window-desktop');
const shareMobile = document.querySelector('.share-window-mobile');
const avatar = document.querySelector('.avatar');
const shareBtnActive = document.querySelector('.share-btn-active');
const shareBtn = document.querySelector('.share-btn');
const icon = document.querySelector('.icon');

shareBtn.addEventListener('click', clickShareOn);
shareBtnActive.addEventListener('click', clickShareOn);

function clickShareOn() {
    shareDesktop.classList.toggle("none");
    shareBtn.classList.toggle("share-btn-clicked");
    icon.classList.toggle("icon-white");
    avatar.classList.toggle("none");
    shareMobile.classList.toggle("none");
}

