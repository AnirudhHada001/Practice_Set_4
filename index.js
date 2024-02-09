// Practice Set 4
// Q1
let str = "Har\"";
console.log(str.length);

// Q2
const sentence = "The quick brown fox jumps over the lazy dog";
let word = "fox";

console.log(sentence.includes(word));
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`,
);

// Q3
let str = "Anirudh Hada";
console.log(str.toLowerCase());

// Q4
let str2 = "Please give Rs 1000";
let amt = Number.parseInt(str2.slice(15));

console.log(amt);
console.log(typeof amt);

// Q5
let friend = "Vinayak";
friend[3] = "o";
console.log(friend); // friend is not changed, because string is immutable
