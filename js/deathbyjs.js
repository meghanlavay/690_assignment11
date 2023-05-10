//STEP 1
// function alphabetize() {
//     let word = prompt('Enter a word');
//     let letters = word.split('').sort().join('');
//   }
// console.log(alphabetize());

//STEP 2
// function uppercase(string) {
// let array = string.split(' ');
// let newarray = [];
//   for(let i = 0; i < array.length; i++) {
//       newarray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
//   }
//   return newarray.join(' ');
// }
// console.log(uppercase("the quick brown fox"));

//STEP 3
// function countVowels() {
//     let string = (prompt('Enter a sentence')).toLowerCase;
//     let vowels = string.match(/[aeiou]/gi);
//     return vowels.length;
// };
// countVowels();

//STEP 4
// function stringId(string) {
// let text = '';
// let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     for(let i=0; i < string; i++ ) {  
//     text += charList.charAt(Math.floor(Math.random() * charList.length));
//     }
//     return text;
// }
// console.log(stringId(8));

//STEP 5
let  countries = ['Australia', 'Germany', 'United States of America'];
let country = countries[0];
function longestCountry (countries){
    for (let i = 0; i < countries.length; i++) {
    let longest = countries[i];
        if (country.length < longest.length){
            country = longest
        }
    }
}

let longCountry = longestCountry(countries)
console.log(country)