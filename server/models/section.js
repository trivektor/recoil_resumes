const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  'Section',
  new Schema(
    {
      name: String,
      description: String,
    },
    {
      timestamps: true,
    }
  )
);
