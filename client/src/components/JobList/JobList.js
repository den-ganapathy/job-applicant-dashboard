import React, { Component } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import JobOpeningsList from "./JobOpeningsList";
import back from "../../images/next.svg";
import { withRouter } from "react-router";
import axios from "axios";

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: {},
    };
  }

  async componentDidMount() {
    const url = "http://localhost:8080/api/jobLIST";
    await axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ jobs: data });
        console.log(this.state.jobs);
      });
  }

  getapicall = async () => {
    await axios
      .get("http://localhost:8080/api/jobLIST")
      .then((res) => {
        console.log(res.data);
        this.setState({ jobs: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getapicall();
    console.log("bbbbc");
  }

  render() {
    let { jobs } = this.state;
    console.log("ssssss", jobs);

    console.log("bbbb", this.state.jobs);
    return (
      <div className="JobList">
        <Navigation />
        <div className="JobList-jobListing">
          <div className="JobList-Heading">
            <img
              src={back}
              alt="back"
              onClick={() => {
                this.props.history.push("/career");
              }}
            />
            <label>Job Openings</label>
          </div>
          {jobs && jobs.length
            ? jobs.map((jobInfo, index) => {
                {
                  return <JobOpeningsList jobsResponse={jobInfo} key={index} />;
                }
              })
            : null}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(JobList);
