const demo = document.getElementById('demo');

const r1 = 11
const r2 = 11

class Car {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
}

const c1 = new Car("c1", "white")
const c2 = new Car("c1", "white")

console.log("r1 === r2 : ", r1 === r2)
console.log(r1, r2)
console.log("c1 === c2 : ", c1 === c2)
console.log(c1, c2)

const keys = Object.keys(c1)
const values = Object.values(c1)
console.log("keys: ", keys)
console.log("values: ", values)

const randomNumber = Math.random() * 100
const ceilNumber = Math.ceil(randomNumber)

console.log(ceilNumber);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

console.log({ length });

let text2 = "We are the so-called \"Vikings\" from the north.";
let text3 = 'It\'s alright.';
let text4 = 'It 2\\1  \'s alright.';

console.log(text2);
console.log(text3);
console.log(text4);

demo.innerHTML = text4;
demo.style.backgroundColor = '#707070';
demo.style.padding = '20px';
demo.style.color = 'white';