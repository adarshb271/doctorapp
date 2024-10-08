const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
  street: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  pincode: { type: String, required: true, trim: true },
});

const hospitalSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    image: { type: String },
    address: addressSchema,
    departmentID: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Department' }],
  },
  { timestamps: true }
);

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;

// const mongoose = require('mongoose');
// const hospitalSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     image: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
// const Hospital = mongoose.model('Hospital', hospitalSchema);
// module.exports = Hospital;
