// console.log('wait for 2 seconds');
// setTimeout(() => {
//     console.log('hello');
// }, 2000);

const _ = require('lodash');
const people = require('./people');

console.log(_.last(people.people));
console.log(people.people);
console.log(people.a);
people.test();
