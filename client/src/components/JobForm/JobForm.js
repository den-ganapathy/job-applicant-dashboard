import React, { Component } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Form from "./Form";
import JobDetails from "./JobDetails";
import axios from "axios";

class JobForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: {},
    };
  }

  // async componentDidMount() {
  //   const url = "http://localhost:8080/api/jobLIST";
  //   await axios
  //     .get(url)
  //     .then((response) => response.data)
  //     .then((data) => {
  //       this.setState({ jobs: data });
  //       console.log(this.state.jobs);
  //     });
  // }

  // getapicall = async () => {
  //   await axios
  //     .get("http://localhost:8080/api/jobLIST/")
  //     .then((res) => {
  //       console.log(res.data);
  //       this.setState({ jobs: res.data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // componentDidMount() {
  //   this.getapicall();
  //   console.log("bbbbc");
  // }

  render() {
    let jobID = this.props.location.state.jobInfoId;
    console.log("fhhh", jobID);
    let { jobs } = this.state;
    console.log("aaaaa", jobs);

    return (
      <div className="JobForm">
        <Navigation />
        <JobDetails jobData={jobs} />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default JobForm;
