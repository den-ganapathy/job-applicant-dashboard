import React, { Component } from "react";
import { Link } from "react-router-dom";

class JobOpeningsList extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   jobInfo: this.props.jobInfo,
    // };
  }

  render() {
    let { jobsResponse } = this.props;
    console.log("zzzz", jobsResponse);
    return (
      <div className="JobOpeningsList">
        <div className="JobOpeningsList-idContent">
          <div className="JobOpeningsList-id">{jobsResponse.id}.</div>
          <div className="JobOpeningsList-Content">
            <div className="JobOpeningsList-Title">{jobsResponse.title}</div>
            <div className="JobOpeningsList-Location">
              {jobsResponse.location}
            </div>
            <div className="JobOpeningsList-Location">
              <span className="bold small-font">
                Employment-Type: {jobsResponse.emp_type}{" "}
              </span>
              {jobsResponse.emp_type}
              <span className="bold small-font marginLeftStyle">
                Seniority-Level: {jobsResponse.level}
              </span>
              {jobsResponse.level}
            </div>
          </div>
        </div>
        <Link
          to={{
            pathname: "/apply-job",
            state: { jobInfoId: jobsResponse.id },
          }}
        >
          <button className="JobOpeningsList-Button">Apply</button>
        </Link>
      </div>
    );
  }
}

export default JobOpeningsList;
