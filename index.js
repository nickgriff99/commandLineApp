var rs = require('readline-sync');

// prompt user for their name
// prompt favorite hobby
// ask if there are any additional hobbies
// add hobbies to list
// store list of users hobbies
// print out list of hobbies at the end

var hobbies = [];

var userName = rs.question('May I have your name? ');

var favHobby = rs.question('What is your favorite hobby? ');

hobbies.push(favHobby);
console.log(hobbies);
