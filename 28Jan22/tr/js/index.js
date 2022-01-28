const demo = document.getElementById('demo');

const sentence = "Today is Friday.";

console.log(sentence);
console.log(sentence.length);
console.log(sentence.slice(0, 8));
console.log(sentence.slice(-16, -8));
console.log(sentence.substring(0, 8)); // no negative indexes
console.log(sentence.substr(6, 2));

let text = "Please visit Amsterdam!";
let newText = text.replace("Amsterdam", "Balk");

console.log(text, ' - ', newText);

const replacedText = text.replace(/ViSit/i, "sail");
console.log(replacedText);
const allReplacedText = text.replace(/a/gi, "@");
console.log("---------");
const regex = /a/gi
const allReplacedText2 = text.replaceAll(regex, "@");
console.log(allReplacedText);
console.log(allReplacedText2);

console.log(text.toLowerCase());
console.log(text.toUpperCase());

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2, "!");

console.log(text3);

const before = "        before         ";
console.log(before.length + ' - ' + before.trim().length + ' - ' + before.trim());

console.log("Adam".padEnd(10, "."));
console.log("123".padStart(5, "*"));

console.log(text1.charAt(0, 1));
console.log("😀");

console.log(text.split(" "));
console.log(text.split(" ").join(" go "));
console.log(text.split(""));
console.log(text.split("").join(""));

let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate"));
console.log(str.indexOf("locate", 15));
console.log(str.lastIndexOf("locate"));

let str2 = "Please locate where 'locate' occurs!";
console.log(str2.search("locate"));
