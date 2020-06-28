const Section = require('./section').schema;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  'Resume',
  new Schema(
    {
      name: String,
      description: String,
      sections: [Section],
    },
    {
      timestamps: true,
    }
  )
);
