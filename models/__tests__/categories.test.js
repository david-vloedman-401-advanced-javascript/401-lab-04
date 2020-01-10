const Categories = require('../categories/categories.js');
const validaator = require('../../lib/validatorClass');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });

  it('can post() a new category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can update() a category', ()=>{
    let obj = { name: 'Test Category'};
    return categories.create(obj)
      .then(data => {
        return categories.update('name', 'Best Category').then(record => {
          expect(record).toEqual('Best Category');
        });
      });    
  });


  it('can delete() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj).then(data => {
      return categories.delete('name').then(record => {
        expect(record).toBeUndefined();
      });
    });
  });

  if('cannot update a record that does not schema)
});