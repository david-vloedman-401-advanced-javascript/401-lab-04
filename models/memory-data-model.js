'use strict';

const uuid = require('uuid/v4');
const validator = require('../lib/validatorClass');

class MemoryModel {

  constructor(schema) {        
    this.database = [];
    this.schema = schema;
  }

  get(id) {
    let response = id ? this.database.filter((record) => record.id === id) : this.database;
    return Promise.resolve(response);
  }

  create(record) {
    record.id = uuid();
    if(validator.isValid(this.schema, record)){
      this.database.push(record);
      return Promise.resolve(record);
    }   
    return Promise.reject('Failed Validation');
  }

  update(id, record) {
    
    if (validator.isValid(this.schema, { id: record})){    
      this.database = this.database.map(item =>
        item.id === id ? record : item,
      );
      return Promise.resolve(record);
    }
    return Promise.reject('Failed Validation');
  }

  delete(id) { 
    this.database = this.database.filter((record) => record.id !== id);
    return Promise.resolve();
  }

}

module.exports = MemoryModel;