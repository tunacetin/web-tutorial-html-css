const demo = document.getElementById('demo');

let match = "The rain in SPAIN stays mainly in the plain";
console.log(match.match(/ain/gi));

let includes = "Hello world, welcome to the universe.";
console.log(includes.includes("world"));

let includes2 = "Hello world, welcome to the universe.";
console.log(includes2.includes("world", 12));

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;

demo.innerHTML = html;

// Numbers
let x = 3.14;
let y = 3;

let x2 = 10;
let y2 = 20;
let z = x2 + y2;

let x3 = 10;
let y3 = 20;
let z3 = "30";
let result = x3 + y3 + z3;

demo.innerHTML = typeof parseInt("11");
demo.innerHTML = parseInt("11.21");
demo.innerHTML = parseFloat("11.21");

console.log(
  Number(true),
  Number(false),
  Number("10"),
  Number("  10"),
  Number("10  "),
  Number(" 10  "),
  Number("10.33"),
  Number("10,33"),
  Number("10 33"),
  Number("John")
);

console.log(
  parseInt("-10"),
  parseInt("-10.33"),
  parseInt("10"),
  parseInt("10.33"),
  parseInt("10 6"),
  parseInt("10 years"),
  parseInt("years 10")
);

console.log(
  Number.MAX_VALUE,
  Number.MIN_VALUE,
  Number.POSITIVE_INFINITY,
  Number.NEGATIVE_INFINITY
);