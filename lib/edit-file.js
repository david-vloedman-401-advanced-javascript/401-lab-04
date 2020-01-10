'use strict';

const fs = require('fs');
const validator = require('./lib/validatorClass');

/**
 * Reads the file specified
 * @param {string} file 
 * @param {function} callback 
 */
const read = (file, callback) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(undefined, JSON.parse(data.toString()));
    }
  });
};

/**
 * 
 * @param {JSON} data 
 * @param {string} fileName 
 * @param {object} rules 
 * @param {function} callback 
 */
const save = (data, fileName, rules, callback) => {
  if(validator.isValid(rules, data)){
    const buffer = Buffer.from(JSON.stringify(data));

    fs.writeFile(fileName, buffer, err => {
      if (err) {
        callback(err);
      } else {
        callback(undefined);
      }
    });
  } else { console.log('Is invalid'); }
};



module.exports = {read, save};
