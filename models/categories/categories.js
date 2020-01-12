'use strict';

const DataModel = require('../memory-data-model.js');

class Categories extends DataModel {
  constructor() {
    const schema = {
      id: { required: true },
      name: { required: true },
    };
    super(schema);
  
  }
}

module.exports = Categories;