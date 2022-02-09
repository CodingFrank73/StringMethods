
// ---------- Aufgabe 1.1 ----------
let firstName = "Frank";
let lastName = "Hauser";
let fullName = firstName + lastName;

console.log("Der Vorname hat eine länge von: " + firstName.length);
console.log("Der Nachname hat eine länge von: " + lastName.length);

console.log("Beide Namen zusammen haben eine länge von: " + fullName.length);

// ---------- Aufgabe 1.2 ----------
const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log("Position von h ist: " + txt.indexOf("h"));
console.log("Position von Earth ist: " + txt.search("Earth"));
console.log("Position von Moon ist: " + txt.search("Moon"));

// ---------- Aufgabe 1.3 ----------
var txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

console.log("Position von ; ist: " + txt2.search(";"));
console.log("Position von green ist: " + txt2.search("green"));
console.log("Position von blue ist: " + txt2.search("blue"));

// ---------- Aufgabe 1.7 ----------
const text = "Sam is good at codingschool";

document.write(text.replace("good", "bad") + "<br>");
document.write(text.replace("Sam", "Susi") + "<br>");
document.write(text.replace("codingschool", "tennis") + "<br>");

// ---------- Aufgabe 1.8 ----------
const text1 = "Sam is going to codingschool";
let textNew = text1.replace("codingschool", "school")

document.write("--------------------------------------------------" + "<br>");

document.write(textNew.toUpperCase() + "<br>");
document.write(textNew.toLowerCase() + "<br>");

let a = textNew.replace("Sam", "Sam".toUpperCase());
document.write(a + "<br>");

let b = textNew.replace("is going to", "is going to".toUpperCase());
let c = b.replace("Sam", "sam");
document.write(c + "<br>");

const mySentence = textNew;
const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
document.write(finalSentence);