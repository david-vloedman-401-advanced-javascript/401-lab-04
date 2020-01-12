const Model = require('../file-data-model');
/**
 * @class
 */
class Product extends Model {
  constructor(path){

    const schema = {
      category_id: {
        type: 'string',
        required: true,
      },
      price: {
        type: 'number',
        require: true,
      },
      weight: {
        type: 'number',
      },
      quantity_in_stock: {
        type: 'number',
        required: true,
      },
    };
    super(schema, path);
  }
}

module.exports = Product;