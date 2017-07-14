console.log('js is sourced');

var myApp = angular.module('myApp', []);

myApp.controller('PersonController', function() {
  // Code that runs when our controller is initialized
  // Similar to document ready
  var person = this;
  console.log(this);

  console.log('PersonController');

  person.people = [];
  person.addPerson = function(name, message) {
    var newPerson = {
      name: name,
      message: message
    };
    person.people.push(newPerson);
    console.log(person.people);
  };
  person.delete = function(index) {
    person.people.splice(index, 1);
  };
});
