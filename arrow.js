/*var names = ['Andrew', 'Charles', 'Logan'];

names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Charles'));

var person = {
  name: 'Charles',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    });
  }
};

person.greet();*/

function add (a, b) {
  return a + b;
}

var addst = (a, b) => {
  return a + b;
}
console.log(addst(4, 7));

var addexp = (a, b) => a + b;

console.log(addexp(1,7));
