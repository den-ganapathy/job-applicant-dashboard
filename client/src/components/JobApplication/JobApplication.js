import React, { Component } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import videoBg from "../../Videos/videoplayback.mp4";
import close from "../../images/Close.svg";

import { Link } from "react-router-dom";

class JobApplication extends Component {
  constructor() {
    super();
    this.state = {
      navButton: false,
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal }, () => {
      if (this.state.showModal) {
        // this.props.addJobList();
        console.log("sss");
      }
    });
  };

  submitClicked = () => {
    this.props.onSubmitAddList();
    this.toggleModal();
  };

  componentDidMount() {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 650) {
        this.setState({ navButton: true });
      } else {
        this.setState({ navButton: false });
      }
    };
  }

  render() {
    const { showModal } = this.state;
    return (
      <div className="jobApplication">
        <Navigation navButton={this.state.navButton} />
        <div className="jobApplication-videoHeader">
          <video autoPlay muted loop className="jobApplication-videoBackground">
            <source src={videoBg} type="video/mp4" />
          </video>
          <div className="jobApplication-welcome-msg">
            <h1>Looking for a job?</h1>
            <p>Find one here</p>
            {/* <Link to={{ pathname: "/job-list" }}> */}
            <button
              className="jobApplication-viewJobBtn"
              onClick={this.toggleModal}
            >
              View Open Jobs
            </button>
            {/* </Link> */}
            {showModal ? (
              <div style={{ color: "black" }} className="jobListing__modal">
                <div className="jobListing__modal--container">
                  <div className="jobListing__modal--container__header">
                    <label>Login</label>
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
                      Enter Email
                    </label>
                    <input
                      className="jobListing__modal--container__body--titleI"
                      type="text"
                      onChange={this.changeJobTitle}
                    ></input>
                    <button
                      onClick={this.submitClicked}
                      className="jobListing__modal--container__foot--btn"
                    >
                      Send OTP
                    </button>
                    <label className="jobListing__modal--container__body--locP">
                      Enter OTP
                    </label>
                    <input
                      className="jobListing__modal--container__body--locI"
                      type="text"
                      onChange={this.changeJobLocation}
                    ></input>
                  </div>
                  <div className="jobListing__modal--container__foot">
                    <button
                      onClick={this.submitClicked}
                      className="jobListing__modal--container__foot--btn"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default JobApplication;
