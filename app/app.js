/* global prompt:true */
var prompt = require('sync-prompt').prompt;

var dogs = [];

var dogName = prompt('Enter the first dog\'s name: ');

while( dogName !== 'q'){
  var dog = {};
  dog.name = dogName;
  dog.age = prompt('What is ' + dogName + '\'s age? ');
  dog.breed = prompt('What is ' +dogName + '\'s breed? ' );
  dogs.push(dog);
  dogName = prompt('Enter the name of the next dog or \'q\' to quit: ');
}

console.log(dogs);
