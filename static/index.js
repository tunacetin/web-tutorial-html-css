const baseUrl = 'https://tunacetin.github.io/web-tutorial-html-css/';

const iframe = document.getElementById('content');


function setContent(content) {
  iframe.setAttribute('src', baseUrl + content);
  // console.log(baseUrl + content);
}