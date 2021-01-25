import React, { Component } from "react";
import close from "../../images/Close.svg";

class JobListing extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      jobDetails: false,
    };
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal }, () => {
      if (this.state.showModal) {
        this.props.addJobList();
      }
    });
  };

  submitClicked = () => {
    this.props.onSubmitAddList();
    this.toggleModal();
  };

  changeJobTitle = (e) => {
    this.props.updateJobList(this.props.currentIndex, "jobTitle", e);
  };

  changeJobLocation = (e) => {
    if (e.target.value.length <= 10) {
      this.props.updateJobList(this.props.currentIndex, "location", e);
    }
  };

  changeJobDescription = (e) => {
    this.props.updateJobList(this.props.currentIndex, "Description", e);
  };

  removeFromLeadsList = () => {
    this.props.removeFieldFromJobList(this.props.currentIndex);
  };

  openModalDetails = () => {
    this.setState({ jobDetails: true });
  };

  render() {
    const { showModal } = this.state;
    const { jobListingArr, currentIndex, jobListArray } = this.props;

    return (
      <div className="jobListing">
        <div className="jobListing__head">
          <label className="jobListing__head--app">Job Listings</label>
          <button onClick={this.toggleModal} className="jobListing__head--btn">
            + Add Listing
          </button>
        </div>
        <div className="jobListing__main">
          {jobListArray.map((data, index) => {
            return (
              <div
                key={index}
                onClick={this.openModalDetails}
                className="jobListing__main--list"
              >
                <div className="jobListing__main--list__title">
                  <label>{data.jobTitle}</label>
                  <img
                    onClick={() => this.props.removeFieldFromJobList(index)}
                    src={close}
                    alt="close"
                  />
                </div>
                <div className="jobListing__main--list__description">
                  <label>
                    <span style={{ fontWeight: "600" }}>Location : </span>{" "}
                    {data.location}
                  </label>
                  <p style={{ marginTop: "1rem" }}>{data.Description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {showModal ? (
          <div className="jobListing__modal">
            <div className="jobListing__modal--container">
              <div className="jobListing__modal--container__header">
                <label>Information</label>
                <img
                  onClick={this.toggleModal}
                  style={{ width: "1.2rem" }}
                  src={close}
                  alt="close"
                  className="jobListing__modal--container__header--close"
                />
              </div>
              <div className="jobListing__modal--container__body">
                <label className="jobListing__modal--container__body--titleP">
                  Enter Title
                </label>
                <input
                  className="jobListing__modal--container__body--titleI"
                  type="text"
                  onChange={this.changeJobTitle}
                ></input>
                <label className="jobListing__modal--container__body--locP">
                  Enter Location
                </label>
                <input
                  className="jobListing__modal--container__body--locI"
                  type="text"
                  onChange={this.changeJobLocation}
                ></input>
                <label className="jobListing__modal--container__body--desP">
                  Description
                </label>
                <textarea
                  className="jobListing__modal--container__body--desI"
                  type="text"
                  onChange={this.changeJobDescription}
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
              <div className="jobListing__modal--container__foot">
                <button
                  onClick={this.submitClicked}
                  className="jobListing__modal--container__foot--btn"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default JobListing;
