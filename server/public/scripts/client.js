console.log('js is sourced');

var myApp = angular.module('myApp', []);

myApp.controller('PersonController', function(){
  // Code that runs when our controller is initialized
  // Similar to document ready
  var person = this;
  console.log(this);
  person.message = 'Hello!';
  console.log('PersonController');

});
