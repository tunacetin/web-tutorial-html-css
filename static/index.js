const baseUrl = 'https://tunacetin.github.io/web-tutorial-html-css/';
let menuVisibility = false;

const iframe = document.getElementById('content');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

function setContent(content) {
  iframe.setAttribute('src', baseUrl + content);
}

function handleIconToggle() {
  if (menuVisibility) {
    closeIcon.style.display = "none";
    menuIcon.style.display = "inline";
  } else {
    menuIcon.style.display = "none";
    closeIcon.style.display = "inline";
  }
}

function handleMenuToggle() {
  if (menuVisibility) {
    menu.classList.remove('closed');
  } else {
    menu.classList.add('closed');
  }
}

function toggleMenu() {
  handleIconToggle();
  handleMenuToggle();
  menuVisibility = !menuVisibility;
}