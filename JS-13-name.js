/* 
Write a code that every letter of the alphabet that the user enters (lowercase or uppercase does not matter), 
the names that start with that letter will be printed.
- Use the prompt
- If the user enters something other than alphabets, 
tell them to enter only alphabets with an alert, then show the prompt again.
- If the user enters more than one character, 
alert them to enter only one of the alphabets, then show the prompt again.
- if there was no name, print "nothing found"
*/ 

const names = [
  "Rhys",
  "Isabella",
  "Ariella",
  "Millie",
  "Olivia",
  "Lyla",
  "Gianna",
  "Everett",
  "Hudson",
  "Sienna",
  "Emerson",
  "Alice",
  "Sharon",
  "Isla",
  "Thea",
  "Alma",
  "Maverick",
  "Raya",
  "Jesse",
  "Zoey",
  "Amelia",
  "Xavier",
  "Andrea",
  "Liam",
  "Kieran",
  "Isha",
  "Akira",
  "Marcus",
  "Rohan",
  "Alana",
  "Skylar",
  "Dante",
  "Mae",
  "Sloane",
  "Elise",
  "Finley",
  "Savannah",
  "Everly",
  "Ayla",
  "Theo",
  "Kian",
  "Joseph",
  "Brielle",
  "Brian",
  "Skyler",
  "Myra",
  "Bailey",
  "Riley",
  "Ezekiel",
  "Rebecca",
  "Sage",
  "Rae",
  "Sasha",
  "Valerie",
  "Sean",
  "Brianna",
  "Elora",
  "Simon",
  "Leon",
  "Ivan",
  "Nia",
  "Noah",
  "Khadijah",
  "Vivian",
  "Mina",
  "Evan",
  "Ava",
  "Nolan",
  "James",
  "Jade",
  "Mika",
  "Chelsea",
  "Rory",
  "Natasha",
  "Nora",
  "Lennox",
  "Emery",
  "Wren",
  "Aiden",
  "Harlow",
  "Kyra",
  "Leilani",
  "Kayla",
  "Avery",
  "Zoe",
  "Lara",
  "Camila",
  "Alyssa",
  "Amira",
  "Alaina",
  "Shiloh",
  "Luna",
  "Camille",
  "Orion",
  "Hayden",
  "Rhea",
  "Emma",
  "Mateo",
  "Mya",
  "Yara",
  "Evie",
  "Asher",
  "Azariah",
  "Isabelle",
  "Aisha",
  "Arlo",
  "Charlotte",
  "Gemma",
  "Fiona",
  "Ellis",
  "Asa",
  "Skye",
  "Nico",
  "Reese",
  "Kyle",
  "Lachlan",
  "Aditya",
  "Marie",
  "Margot",
  "Lisa",
  "Cecilia",
  "Monica",
  "Aubrey",
  "Grace",
  "Noa",
  "Scarlett",
  "Miles",
  "Deborah",
  "Lena",
  "Oliver",
  "Anya",
  "Lily",
  "Elena",
  "Naomi",
];
//! Answer:
function printName() {
  let letter = prompt("please enter a letter!")
  let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  letter = letter.toUpperCase().trim()
  
  if (letter.length > 1) {
    alert("Enter only one of the alphabets")
    return printName()
  } else if (alphabet.indexOf(letter.toUpperCase()) === -1) {
    alert("Enter only alphabets please")
    return printName()
  } else if (alphabet.indexOf(letter.toUpperCase())){
  let nameArr = names.filter((name) => name[0].toUpperCase() === letter)
  if (nameArr.length >0) {
    console.log(`names with letter that you choose : ${nameArr.join(", ")}`);
  } else {
    alert("Nothing found.");
  }
}
}

printName();


















































// function printName() {
//   let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
//   let letter = prompt("Please enter a letter:");

//   // تبدیل حرف وارد شده به حروف بزرگ و حذف فاصله‌های اضافی
//   letter = letter.toUpperCase().trim();  

//   // بررسی اینکه ورودی یک حرف از الفبای انگلیسی باشد
//   if (letter.length > 1) {
//     alert("Please enter only one alphabet.");
//     return printName();  // دوباره از کاربر ورودی بگیریم
//   } else if (alphabet.indexOf(letter) === -1) {
//     alert("Please enter only alphabets.");
//     return printName();  // دوباره از کاربر ورودی بگیریم
//   }

//   // فیلتر کردن نام‌ها بر اساس حرف وارد شده
//   const filteredNames = names.filter((name) => name[0].toUpperCase() === letter);

// }

// // فراخوانی تابع برای شروع فرایند
// console.log(printName())



// Function to prompt the user and handle the logic
// function promptForLetter() {
//   let input = prompt("Enter a letter of the alphabet:");

//   // Check if input is valid (a single alphabet character)
//   if (input === null) return; // If user cancels, exit

//   // Convert input to lowercase to handle case insensitivity
//   input = input.trim().toLowerCase();

//   // Check if the input is a valid letter and only one character
//   if (input.length !== 1 || !/[a-z]/.test(input)) {
//     alert("Please enter only a single alphabet character.");
//     return promptForLetter(); // Ask again if invalid
//   }

//   // Filter the names that start with the input letter
//   const filteredNames = names.filter(name => name.toLowerCase().startsWith(input));

//   // Show the results or "nothing found" if no names match
//   if (filteredNames.length > 0) {
//     alert("Names starting with " + input.toUpperCase() + ": " + filteredNames.join(", "));
//   } else {
//     alert("Nothing found.");
//   }
// }

// // Call the function to start the process
// promptForLetter();
