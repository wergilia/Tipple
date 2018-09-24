const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const storeSchema = new Schema({
  storename: String,
  direction: String,
  imgName: String,
  imgPath: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;
