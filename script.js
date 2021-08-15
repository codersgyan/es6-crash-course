// ES6 AKA Ecmascript 2015
// let const
// var productName = 'Laptop';
// code polute

// function register() {
//     var username = 'rakesh';
//     var password = 'secret';
// }

// console.log(username);

// let product = 'Laptop';

// console.log(product);
// const product = 'Laptop';
// product = 'Mobile';
// let age = 20; // undefined
// console.log(age);

// const age = {
//     years: 19,
// };
// age = 20;

// console.log(age);
// Arrow functions
// function greet() {
//     console.log('Good morning');
// }

// const addition = a => console.log(a + a);
// addition(5);

// console.log(this);

// const shop = {
//     purchase: () => {
//         console.log(this);
//     },
// };

// shop.purchase();

// const myButton = document.querySelector('#myButton');

// const shop = {
//     price: 100,
//     buy: function () {
//         myButton.addEventListener('click', () => {
//             // console.log(this);
//             console.log('I spent ' + this.price);
//         });
//     },
// };
// shop.buy();

// Template literals AKA backticks

// const firstName = 'Rakesh';
// const lastName = 'K';

// console.log(firstName + ' ' + lastName);

// hello
// how are you

// const message = 'hello \n' + 'how are you';
// const name = 'Rakesh';
// const message = `hello ${5 + 6}
// how are you
// `;
// console.log(message);

// Enhanced object literals
// computed propery keys
// Method defination shorthand
// Property shorthand

// const accessToken = 'dsjfhkadhskfhk';
// const refreshToken = 'adkjfljdlffdd';

// const user = {
//     accessToken,
//     refreshToken,
// };

// console.log(user);

// Destructuring
// const user = {
//     name: 'John Doe',
//     age: 30,
// };

// const { name: fullName, age } = user;

// console.log(fullName);
// console.log(user.name);

// const data = ['Rakesh', 30, 'Engineer'];
// const [name, age, profession] = data;
// const [count, setCount] = useState();

// Default parameters

// const register = (name, password, image = 'test.png') => {
//     // const img = image || 'test.png';
//     console.log(name, password, image);
// };

// register('Rakesh', 'secret', 'photo.png');
// Spread ...

// const languages = ['c', 'c++', 'javascript'];
// const newLanguages = [...languages, 'typescript'];

// const settings = {
//     volumn: 10,
//     brightness: 80,
// };

// const newSettings = { ...settings, volumn: 20 };

// console.log(newSettings);

// Rest ...

// const addItems = (...items) => {
//     console.log(items);
// };

// addItems(3, 2, 4, 10, 30);
// For of loop
// Array, string, Object, set, map

// const numbers = [2, 4, 5, 7];

// for (const num of numbers) {
//     console.log(num);
// }

// const language = 'Javascript';

// for (const char of language) {
//     console.log(char);
// }

// const person = {
//     name: 'Rakesh',
//     city: 'Moscow',
//     brand: 'apple',
// };

// for (const [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }

// Promises

// function login(cb) {
//     setTimeout(() => {
//         console.log('Login..');
//         cb();
//     }, 0);
// }

// login(() => {
//     // async

//     console.log('Redirecting');
// });

// function login() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Login...');
//             reject();
//         }, 0);
//     });
// }

// login()
//     .then(() => {
//         console.log('Redirecting..');
//     })
//     .catch((err) => {
//         console.log('Error...');
//     });
// find (Array methods)

// const users = [{ name: 'Rakesh' }, { name: 'John' }];

// const user = users.find((user) => {
//     return user.name === 'John';
// });

// console.log(user);

// findIndex
// const users = [{ name: 'Rakesh' }, { name: 'John' }];

// const user = users.findIndex((user) => {
//     return user.name === 'Jane';
// });

// console.log(user);

// Set
// const uniqueNumbers = new Set();
// uniqueNumbers.add(3);
// uniqueNumbers.add(5);
// uniqueNumbers.add(6);
// uniqueNumbers.add(3);
// console.log(uniqueNumbers.has(10));

// const numbers = [4, 5, 6, 4, 7, 6];
// const uniqueNumbers = new Set(numbers);
// console.log(Array.from(uniqueNumbers));

// map (Hashtables)

// const urls = new Map();
// urls.set('development', 'dev.example.com');
// urls.set('production', 'prod.example.com');

// console.log(urls.get('production'));
// O(1)

// const urlsObj = {
//     development: 'dev.example.com',
//     production: 'prod.example.com',
// };

// for (const [key, value] of urls) {
//     console.log(key, value);
// }

// console.log(urls.size);

// order
// size

// classes

// function Person(name) {
//     this.name = name;
// }

// const rakesh = new Person('Rakesh');
// const john = new Person('John');
// rakesh.name = 'Coders Gyan';
// console.log(john);

// class Person {
//     name;

//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log('Good morning');
//     }
// }

// class GreatPerson extends Person {
//     attitude = 'cool';

//     greet() {
//         console.log('Good Evening');
//     }
// }

// // const rakesh = new Person('Rakesh');
// const john = new GreatPerson('Johny');
// // john.name = 'Joy';
// console.log(john.greet());

// ESM ( ES6 modules )
import { libName as myLibName } from './lib.js';
import myLogin from './lib.js';
myLogin();
// console.log(myLibName);
