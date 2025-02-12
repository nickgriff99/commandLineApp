var rs = require('readline-sync');

// prompt user for their name
// prompt favorite hobby
// ask if there are any additional hobbies
// add hobbies to list
// store list of users hobbies
// print out list of hobbies at the end

var hobbies = [];
var areYouSure = false;
var moreHobbies = 0;

function getHobbyCount() {
  moreHobbies = rs.questionInt('How many additional hobbies do you have? ');
  return moreHobbies;
}

function addHobbies(numHobbies) {
  var counter = 0;
  while(counter < numHobbies) {
    var input = rs.prompt();
    hobbies.push(input);
    counter++;

    if (counter < moreHobbies) {
      console.log('-- Awesome! "' + input + '" is fun! What\'s the other ' + (numHobbies - counter) + ' hobby?');
    } else {
      console.log('I wish I could do ' + hobbies + '... but I\'m just a computer.');
    }
  }
}


var userName = rs.question('May I have your name? ');

var favHobby = rs.question(userName + ', what is your favorite hobby? ');

hobbies.push(favHobby);
  getHobbyCount();


if (moreHobbies > 0) {
  console.log('Cool, what are they? ')
  addHobbies(moreHobbies);
} else {
  areYouSure = rs.keyInYN('Are you sure? ' + hobbies[0] + ' is all you like to do? ');
}

if (!areYouSure && hobbies.length <= 1) {
  getHobbyCount();
  console.log('Cool, what are they? ');
  addHobbies(moreHobbies);
} else if (areYouSure) {
  console.log(hobbies + ' is cool, good for you. Goodbye!');
}
