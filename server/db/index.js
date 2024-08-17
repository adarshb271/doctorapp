const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/hospitalApp')
  .then(() => {
    console.log('DB connected');
  })
  .catch(() => {
    console.log('error');
  });
module.exports = mongoose;
