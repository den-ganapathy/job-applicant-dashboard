const express = require("express");
const router = express.Router();
const JobDetails = require("../models/JobDetails");
const ApplicantDetails = require("../models/applicantDetails");

//retrieving job list
router.get("/jobList", async (req, res) => {
  const doc = await JobDetails.find();
  res.send(doc);
});

//posting job details
router.post("/jobDetails", async (req, res) => {
  const { title, location, emp_type, level, expiry_date } = req.body;
  const job = new JobDetails({
    title: title,
    location: location,
    emp_type: emp_type,
    level: level,
    expiry_date: expiry_date,
  });
  job.save().then(() => {
    res.send(job);
  });
});

//retrieving applicant list
router.get("/applicantList", async (req, res) => {
  const doc = await ApplicantDetails.find();
  res.send(doc);
});

//posting applicant list
router.post("/applicantDetails", async (req, res) => {
  const { name, email, phone, location, experience, description } = req.body;
  const applicant = new ApplicantDetails({
    name: name,
    email: email,
    phone: phone,
    location: location,
    experience: experience,
    description: description,
  });
  applicant.save().then(() => {
    res.send(applicant);
  });
});

module.exports = router;
