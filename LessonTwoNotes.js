var year = 1975;
var fashion;

if (year >= 1960 && year <= 1969) {
  fashion = 'Bell Bottoms';
} else if (year >= 1970 && year <= 1979) {
  fashion = 'Afros and Lip Gloss';
} else if (year >= 1980 && year <= 1989) {
  fashion = 'Shoulder Pads and Bangle Bracelets';
} else if (year >= 1990 && year <= 1999) {
  fashion = 'Wallet Chains';
} else {
  fashion = 'T-shirts and skinny jeans';
}

console.log(fashion);


if (something truthy) {
  // do something
} else if (something else truthy) {
  // do this instead
  // you can even nest conditionals inside each other!
  if (something truthy) {
    //do something here
  }
else {
  // if neither above are truthy, do what's in here
}

// do what's out here after the conditionals

10 % 3;
//=> 1

var num = 6473628;
if (num % 2 === 0) {
  console.log("I'm Even!");
} else {
  console.log("I'm Not Even!");
}

//=> "I'm Even!"

function myCustomName(parameter1, parameter2) {
  //=> Do something with the parameters in here
  return false;
}

// You can also declare a function like this
var anotherFunction = function (parameter3, parameter4) {
  //=> Do something with the parameters in here
  return false;
}

function sumTheNums(num1, num2) {
  return num1 + num2;
}

var x = sumTheNums(3, 5);

x;

//=> 8

function helloWorld() {
  return "Hello";
  return "World";
}

helloWorld();

//=> "Hello"

function conditionalReturn() {
  var num = 3;
  if (num < 5) {
    return num * 5;
  }

  return num;
}

conditionalReturn();

//=> 15