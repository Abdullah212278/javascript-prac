const name = "abdullah"
const repoCount = 50

// console.log(name + repoCount + "value");

// console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String("babu-hc-com")


// console.log(gameName [0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 2)
console.log(newString);

const anotherString = gameName.slice(-4, 1)
console.log(anotherString);


const newStringOne = "                          abdullah    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://abdullah.com/babu%20"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));
