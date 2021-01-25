const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobDetailsSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  emp_type: { type: String, required: true },
  level: { type: String, required: true },
  expiry_date: { type: Date, required: true },
  posted_date: { type: Date, default: Date.now() },
  description: { type: String, required: true },
});
const JobDetails = mongoose.model("job_detail", jobDetailsSchema);

module.exports = JobDetails;
