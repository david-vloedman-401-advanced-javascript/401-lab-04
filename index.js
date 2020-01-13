const Product = require('./models/products/products.js');

const myDB = new Product('./data/products.db');
console.log(myDB.path);

const file = require('./lib/edit-file');


const util = require('util');

const read = util.promisify(file.read);



myDB.get('category_id').then(result => console.log(result));
myDB.create({category_id: 'food', price: 23, weight: 23, quantity_in_stock: 4});

read('./data/products.db').then(res => console.log(res));