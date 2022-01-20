const demo = document.getElementById('demo');
const demo2 = document.getElementById('demo2');
const element = document.getElementById('a');
const element2 = document.getElementById('b');
const element3 = document.getElementById('c');
const element4 = document.getElementById('d');
const age = document.getElementById('age');
const carbike = document.getElementById('carbike');
const bookmagazine = document.getElementById('bookmagazine');
const ternary = document.getElementById('ternary');
const problem = document.getElementById('problem');
const need = document.getElementById('need');
const instance = document.getElementById('instance');
const random = document.getElementById('random');
const random2 = document.getElementById('random2');

let x = 10;
x += 5;

let text = "John";
let text2 = "Doe";
text += " " + text2;

let a = 5 + 5;
let b = "5" + 5;
let c = "Hello" + 5;
let kid = 5;
let man = 30;
let result = '';
if (kid < 18) {
  result += "Welcome Kid!"
}
if (man > 18) {
  result += "Welcome Man!"
}

const carAge = 2;
const bikeAge = '2';
const bookAge = 1;
const magazineAge = '1';
let result2 = '';
let result3 = '';
if (carAge == bikeAge) {
  result2 += "yes == works"
}
if (carAge === bikeAge) {
  result2 += "yes only === works"
}
if (bookAge != magazineAge) {
  result3 += "yes != works"
}
if (bookAge !== magazineAge) {
  result3 += "yes only !== works"
}
const isBig = kid < 18 ?
  'Kid is less than 18' :
  'Kid is bigger than 18';

const stat1 = 'no water';
const stat2 = 'no food';
let result4 = '';
let result5 = '';
if (stat1 === 'no water') {
  result4 = 'i am thirsty';
}
if (stat2 === 'no food') {
  result4 = 'i am hungry';
}
if (stat2 === 'no food' && stat1 === 'no water') {
  result4 = 'i am hungry and thirsty';
} else {
  result4 = 'no problem';
}
if (stat2 === 'no money' || stat1 === 'no water') {
  result5 = 'do you need something?';
}
demo.innerHTML = x;
demo2.innerHTML = text;
element.innerHTML = a + ' ' + typeof a;
element2.innerHTML = b + ' ' + typeof b;
element3.innerHTML = c + ' ' + typeof c;
element4.innerHTML = parseInt(b, 10);
age.innerHTML = result;
carbike.innerHTML = result2;
bookmagazine.innerHTML = result3;
ternary.innerHTML = isBig;
problem.innerHTML = result4;
need.innerHTML = result5;
class Car {
  constructor(color, brand) {
    this.color = color;
    this.brand = brand;
  }
}
const bmw = new Car('red', 'bmw');
instance.innerHTML = bmw instanceof Car;
const randomNumber = parseInt(Math.random() * 100, 10);
const randomNumber2 = parseFloat(Math.random() * 100 + '');
random.innerHTML = randomNumber;
random2.innerHTML = randomNumber2;