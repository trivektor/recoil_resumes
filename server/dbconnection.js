const mongoose = require('mongoose');

module.exports = mongoose.connect(
  process.env.CHATTYY_DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
