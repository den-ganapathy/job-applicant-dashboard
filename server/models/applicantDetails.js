const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApplicantDetailsSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  experience: { type: Number, required: true },
  description: { type: String, required: true },
});
const ApplicantDetails = mongoose.model(
  "applicant_detail",
  ApplicantDetailsSchema
);

module.exports = ApplicantDetails;
