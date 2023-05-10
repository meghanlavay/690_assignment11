//STEP 1
// function nameLength() {
//     let yourName = prompt('Enter your name');
//     alert(yourName.length);
// };
// nameLength();

//STEP 2
// function charLocation() {
//     let yourName = prompt('Enter your name');
//     let index = prompt('Enter a numeric value between 1 and '+ yourName.length);
//     alert(yourName.charAt(index -1));
// };
// charLocation();

//STEP 3
// function fullName() {
//     let firstName = prompt('Enter your first name');
//     let lastName = prompt('Enter your last name');
//     joinName = firstName.concat(' ',lastName);
//     alert('Your name is: ' + joinName);
// };
// fullName();

//STEP 4
// function wordIndex() {
//     let string = 'The quick brown fox jumps over the lazy dog';
//     alert(string.indexOf('fox'));
// };
// wordIndex ();

//STEP 5
// function lastIndex() {
//     let string = 'The quick brown fox jumps over the lazy fox';
//     alert(string.lastIndexOf('fox'));
// };
// lastIndex ();

//STEP 6
// function wordReplace(){
//     let string = 'The quick brown fox jumped over the lazy dog';
//     let fullName = prompt('Enter your full name');
//     alert(string.replace('the lazy dog', fullName));
// }
// wordReplace();

//STEP 7
// function wordSearch() {
//     let string = ('The quick brown fox jumped over the lazy dog').toLowerCase();
//     let word = (prompt('Enter the word you are searching for')).toLowerCase();
//     let findWord = string.search(word);
//     if (findWord === -1 ) {
//         alert('The word can not be found in the text');
//     } else {
//         alert('The word has been found.')
//     };
// };
// wordSearch();

//STEP 8
// function extractString() {
//     let old_string = 'The quick brown fox jumped over the lazy dog';
//     let new_string = 'the lazy dog';
//     let index = old_string.indexOf(new_string);
//     alert(old_string.slice(index, (index + old_string.length)).toUpperCase());
// };
// extractString();
    
//STEP 9
// function deleteSpace() {
//     let string = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
//     alert(string.trim().toLowerCase());
// };
// deleteSpace();

//STEP 10
// function capLetter() {
//     let string = 'the quick brown fox jumps over the lazy dog';
//     alert(string.charAt(0).toUpperCase()+string.slice(1));
// };
// capLetter();
