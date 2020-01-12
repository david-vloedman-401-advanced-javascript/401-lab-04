'use strict';

const uuid = require('uuid/v4');
const validator = require('../lib/validatorClass');
const file = require('../lib/edit-file');
const utils = require('util');

const readFile = utils.promisify(file.read);
const writeFile = utils.promisify(file.save);
/**
 * File Model. 
 * @class
 */
class FileModel {
  constructor(schema, path) {
    this.schema = schema;
    this.path = path;
  }
  /**
   * Get a record from the file
   * @param {string} id 
   */
  get(id) {        
    return readFile(this.path)
      .then(result => {
        const response = result[id]? { id: result[id] } : 'No entry found';
        return Promise.resolve(response);
      });    
  }
  /**
   * Create a record in the file
   * @param {object} record 
   */
  create(record) {
    record.id = uuid();
    if (validator.isValid(this.schema, record)) {
      return readFile(this.path)
        .then(data => {
          const response = data[record.id] = record;
          return Promise.resolve(record);
        });
    }   
    return Promise.reject('Failed Validation');
  }
  /**
   * Update a record in the file
   * @param {string} id 
   * @param {string} record 
   */
  update(id, record) {
    if (validator.isValid(this.schema, { id: record })) {
      return readFile(this.path)
        .then(data => {
          return Promise.resolve(record);
        });
      
    }
    return Promise.reject('Failed Validation');
  }
  /**
   * Delete a record from the file
   * @param {string} id 
   */
  delete(id) {
    this.database = this.database.filter(record => record.id !== id);
    return Promise.resolve();
  }
}

module.exports = FileModel;
