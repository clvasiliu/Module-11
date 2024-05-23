//STEP 1
// let inputName = prompt("Please enter your name.");
// let length = inputName.length;
// window.alert(`The length of your name is ${length}`);

//STEP 2
// let inputName = prompt("Please enter your name.");
// let index;
// do {
//     index = parseInt(prompt("Choose a number."));
// } while(index < 0 || index > inputName.length);
// window.alert(`The letter in your name at position ${index} is ${inputName.charAt(index)}`);

//STEP 3
// let firstName = prompt("Please enter your first name.");
// let lastName = prompt("Please enter your last name.");
// window.alert("Your name is: ".concat(firstName, " ", lastName));

//STEP 4
// let string = "The quick brown fox jumps over the lazy dog";
// let searchStr = "fox";
// window.alert(`The index of '${searchStr}' in the string '${string}' is ${string.indexOf(searchStr)}`);

//STEP 5
// let string = "The quick brown fox jumps over the lazy fox";
// let searchStr = "fox";
// window.alert(`The index of '${searchStr}' in the string '${string}' is ${string.lastIndexOf(searchStr)}`);

//STEP 6
// let string = "The quick brown fox jumped over the lazy dog";
// let usersName = prompt("Please enter your full name.");
// window.alert(string.replace("the lazy dog", usersName));

//STEP 7
// let string = "The quick brown fox jumps over the lazy dog";
// let word = prompt("Please select a word.");
// window.alert(`The word was found at ${string.search(word) === -1 ? "no" : string.search(word)} index.`);

// //STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog";
// let new_string = old_string.slice(31);
// window.alert(`The result of slicing '${old_string}' is '${new_string.toUpperCase()}'.`);

//STEP 9
// let string = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
// window.alert(`The trimmed and lowercase version of '${string}' comes out to be '${string.trim().toLowerCase()}'.`);

//STEP 10
// let string = "the quick brown fox jumps over the lazy dog";
// window.alert(string.charAt(0).toUpperCase().concat(string.slice(1)));