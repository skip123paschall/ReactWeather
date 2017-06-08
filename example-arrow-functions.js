var names = ['Andrew', 'Julie', 'Jen'];

// the function gets called once for each element in the array
// the function gets the current array element passed to it via the string name
// the forEach method defined on the names array object takes as an argument
// the function to call for each element in the array; the array gets passed
// the element value which is a string referenced by the variable name
names.forEach(function (name) {
  console.log('forEach', name);
});

// same thing coded using the arrow function syntax
// this one uses a statement body with the curly braces
names.forEach((name) => {
  console.log('arrowFunc', name);
});

// same as above, but using a shorter syntax
// this works if you just have one line to execute
// this value gets returned
names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Andrew'));

var person = {
  name: 'Andrew',
  greet: function () {
    names.forEach(function (name) {
      console.log(this.name + ' says hi to ' + name)
    });
  }
};
person.greet();

var person2 = {
  name: 'Andrew',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    });
  }
};
person2.greet();
