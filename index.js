var rs = require('readline-sync');

// prompt user for their name
// prompt favorite hobby
// ask if there are any additional hobbies
// add hobbies to list
// store list of users hobbies
// print out list of hobbies at the end

var hobbies = [];

var userName = rs.question('May I have your name? ');

var favHobby = rs.question(userName + ', what is your favorite hobby? ');

hobbies.push(favHobby);

var moreHobbies = rs.questionInt('How many additional hobbies do you have? ');

if (moreHobbies > 0) {
  var counter = 0;
  while(counter < moreHobbies) {
    var input = rs.prompt();
    hobbies.push(input);
    counter++;
    if (counter < moreHobbies) {
      console.log('-- Awesome! "' + input + '" is fun! What\'s the other ' + (moreHobbies - counter) + ' hobby?');
    } else {
      console.log('I wish I could do ' + hobbies + '... but I\'m just a computer.');
    }
  }
} else {
  var areYouSure = rs.keyInYN('Are you sure? ' + hobbies[0] + ' is all you like to do? ');
}

console.log(hobbies);
