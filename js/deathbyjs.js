//STEP 1
// function alphabetize(string) {
//     return string.split("").sort().join("");
// }

// let input = "webmaster";
// console.log(`Example string: '${input}'`);
// console.log(`Expected Output: '${alphabetize(input)}'`);

//STEP 2
// function capitalize(string) {
//     let newStr = [];
//     let splitStr = string.split(" ");
//     splitStr.forEach((str) => { newStr.push(str.charAt(0).toUpperCase().concat(str.slice(1))) });
//     return newStr.join(" ");    
// }

// let input = "the quick brown fox";
// console.log(`Example string: '${input}'`);
// console.log(`Expected Output: '${capitalize(input)}'`);

//STEP 3
// function countVowels(string) {
//     let cnt = 0;
//     let splitStr = string.split("");
//     splitStr.forEach((str) => { cnt += (["a", "e", "i", "o", "u", "y"].includes(str)) ? 1 : 0; });
//     return cnt;    
// }

// let input = "The quick brown fox";
// console.log(`Example string: '${input}'`);
// console.log(`Expected Output: '${countVowels(input)}'`);

//STEP 4
// function generateRandom(length) {
//     let chars = []
//     for (let i = 48; i < 57; i++) {
//         chars.push(String.fromCharCode(i));
//     }
//     for (let i = 65; i < 90; i++) {
//         chars.push(String.fromCharCode(i));
//     }
//     for (let i = 97; i < 122; i++) {
//         chars.push(String.fromCharCode(i));
//     }
//     let result = []
//     for (let i = 0; i < length; i++){
//         result.push(chars[Math.floor(Math.random() * chars.length) + 1]);
//     }
//     return result.join('');
// }

// console.log(`Expected Output: ${generateRandom(8)} or ${generateRandom(8)} or ${generateRandom(8)}`)
// Write a JavaScript function that generates a string id (specified length) of random characters.

// Sample Data and Output
// Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA


//STEP 5
// function Longest_Country_Name(countries) {
//     let max = countries[0];
//     for(let country of countries) {
//         if(country.length > max.length) {
//             max = country;
//         }
//     }
//     return max;
// }

// let input = ["Australia", "Germany", "United States of America"];
// console.log(`Example function: Longest_Country_Name(${input})`);
// console.log(`Expected Output: '${Longest_Country_Name(input)}'`);
