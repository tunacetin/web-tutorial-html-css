const var1 = document.getElementById('var1');
const var2 = document.getElementById('var2');
const var3 = document.getElementById('var3');
const var5 = document.getElementById('var5');
const var4 = document.getElementById('var4');
const var6 = document.getElementById('var6');
const var7 = document.getElementById('var7');
const var8 = document.getElementById('var8');
const var9 = document.getElementById('var9');
const var10 = document.getElementById('var10');
const var11 = document.getElementById('var11');
const var12 = document.getElementById('var12');

const string = "1. değişken türü - " + "string";
var1.innerHTML = string;
const number = "2. değişken türü - : " + 2;
var2.innerHTML = number;
const array = ["pazartesi", "çarşamba", "cuma"];
var3.innerHTML = array;
var4.innerHTML = array[2];
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  isAlive: false,
  getFullName: function () {
    return this.firstName + ' ' + this.lastName
  }
};
var5.innerHTML = person.firstName;
let message = "";
if (person.isAlive) {
  message = person.getFullName() +
    ' is alive. And has ' + person.eyeColor +
    ' eyes. Also ' + person.getFullName()
    + ' is ' + person.age + ' years old.'
} else {
  message = `${person.getFullName()} is dead when he is 
    ${person.age} years old. And also has ${person.eyeColor}
    eyes. R.I.P.`;
}
var6.innerHTML = message;

function add(a, b, c) {
  return a * (b + c);
}

function math(operation, b, c) {
  console.log('i am here, 1', { operation });
  if (!operation) return;
  if (operation === 'add') {
    console.log('i am here, 2', { operation });
    return b + c;
  } else {
    console.log('i am here, 3', { operation });
    return b - c;
  }
  console.log('i am here, 4', { operation });
}

const result2 = add(12, 25, 37);
const result3 = math('add', 25, 37);
const result4 = math('minus', 25, 37);
const result5 = math(undefined, 25, 37);

var7.innerHTML = `12 x (25 + 37) işlemin sonucu : ${result2}`;
var8.innerHTML = `25 ve 37 yi toplama işlemin sonucu : ${result3}`;
var9.innerHTML = `25 ve 37 yi çıkarma işlemin sonucu : ${result4}`;
var10.innerHTML = `25 ve 37 yi undefined işlemin sonucu : ${result5}`;

var weather = "sunny";
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

var11.innerHTML = "The temperature is " + toCelsius(77) + " Celsius";
var12.innerHTML = "The weather is " + weather + "  today";