// function add (a, b) {
//     return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
//
// var groupB = ['Vikram'];
//
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function print(name, age) {
    console.log('Hi ' + name + ' age is ' + age);
}
print(...person);
print(...personTwo);

var names = ['mike', 'ben'];
var final = ['Anton'];
final.push(...names);
function greet(arr) {
    arr.forEach((item) => {
        console.log(item);
    })
}

greet(final);