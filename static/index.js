const baseUrl = 'https://tunacetin.github.io/web-tutorial-html-css/';
let menuVisibility = false;

const iframe = document.getElementById('content');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const buttonList = document.getElementById('buttonList');

const buttonArray = ['29Nov21', '1Dec21', '3Dec21', '6Dec21',
  { tr: '8Dec21', en: '8Dec21' },
  { tr: '10Dec21', en: '10Dec21' },
  { tr: '13Dec21', en: '13Dec21' },
  { tr: '15Dec21', en: '15Dec21' },
  { tr: '17Dec21', en: '17Dec21' },
  { tr: '20Dec21', en: '20Dec21' },
  { tr: '22Dec21', en: '22Dec21' },
  { tr: '24Dec21', en: '24Dec21' },
  { tr: '27Dec21', en: '27Dec21' },
  { tr: '29Dec21', en: '29Dec21' },
  { tr: '31Dec21' },
  { tr: '03Jan22', en: '03Jan22' },
  { tr: '05Jan22', en: '05Jan22' },
  { tr: '07Jan22', en: '07Jan22' },
  { tr: '10Jan22', en: '10Jan22' },
  { tr: '12Jan22', en: '12Jan22' },
  { tr: '14Jan22', en: '14Jan22' },
  { tr: '17Jan22' },
  { tr: '19Jan22', en: '19Jan22' },
  { tr: '21Jan22' },
  { en: '24Jan22' },
  { tr: '26Jan22', en: '26Jan22' },
  { tr: '28Jan22', en: '28Jan22' },
  { tr: '31Jan22' },
];
const singleButton = (date, lang) =>
  `<button onclick="setContent('${date}/index.html')">
    <li>${lang ? date.replace('/', ' - ').replace('tr', 'TR').replace('en', 'EN') : date}</li>
  </button>`;
const doubleButton = ({ tr, en }) =>
  `<div class="buttonContainer">
    <button onclick="setContent('${tr}/tr/index.html')">
      <li>${tr} - TR</li>
    </button>
    <button onclick="setContent('${en}/en/index.html')">
      <li>${en} - EN</li>
    </button>
  </div>`;

buttonList.innerHTML = buttonArray.map(
  (item) => {
    if (typeof item === 'object') {
      if (Object.keys(item).length > 1) {
        return doubleButton(item);
      } else {
        const key = Object.keys(item)[0];
        return singleButton(item[key] + '/' + key, key);
      }
    } else return singleButton(item);
  }
).join('');

function fixHeader() {
  console.log('hoi');
  const menuHeader = document.getElementById('menuHeader');
}

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