import React, { Component } from "react";
import back from "../../images/next.svg";
import { withRouter } from "react-router";

class JobDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { jobData } = this.props;
    console.log("aaaae");
    return (
      <div>
        <div className="backBtn">
          <img
            src={back}
            alt="back"
            onClick={() => {
              this.props.history.push("/job-list");
            }}
          />
        </div>

        {jobData && jobData.length
          ? jobData.map((job) => {
              return (
                <div className="JobDetails">
                  <div className="JobDetails--title"></div>
                  <div className="JobDetails--location">
                    <span className="bold">Title: {job.title}</span> Full-stack
                  </div>
                  <div className="JobDetails--location">
                    <span className="bold">Location:{job.location}</span>{" "}
                  </div>

                  <div className="JobDetails--location">
                    <span className="bold">
                      Employment Type: {job.emp_type}
                    </span>{" "}
                  </div>
                  <div className="JobDetails--location">
                    <span className="bold">Seniority Level: {job.level}</span>{" "}
                  </div>
                  <div className="JobDetails--aboutRoleHead">
                    Requirements :{" "}
                  </div>
                  <ul>
                    <li className="JobDetails--aboutRoleContent">
                      {job.description}
                    </li>
                  </ul>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default withRouter(JobDetails);
