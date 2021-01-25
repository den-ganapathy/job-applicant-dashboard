import React, { Component } from "react";
import Logo from "../images/logoo.png";
import { Link } from "react-router-dom";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      color1,
      color2,
      borderBottom1,
      borderBottom2,
      borderLeft1,
      borderLeft2,
    } = this.props;
    return (
      <div
        className="navigation"
        style={
          window.location.href.includes("home")
            ? { background: "#0e3a62" }
            : { background: "#ffffff" }
        }
      >
        <div className="navigation__logo">
          <img
            src={window.location.href.includes("home") ? Logo : Logo}
            alt=""
            className="navigation__logo--img"
          />
          {window.location.href.includes("home") ? (
            <div className="navigation__logo--applicantMain">
              <button
                style={{
                  color: color1,
                  borderBottom: borderBottom1,
                  borderLeft: borderLeft1,
                }}
                onClick={() => this.props.setCurrentState(1)}
                className="navigation__logo--applicant"
              >
                Applicants
              </button>
              <button
                style={{
                  color: color2,
                  borderBottom: borderBottom2,
                  borderLeft: borderLeft2,
                }}
                onClick={() => this.props.setCurrentState(2)}
                className="navigation__logo--job"
              >
                Job Listings
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {window.location.href.includes("home") ? (
          <button
            onClick={this.props.setLogin}
            className="btn--bookADemo btn navigation--btn"
          >
            Login
          </button>
        ) : window.location.href.includes("career") ? (
          this.props.navButton ? (
            <Link to={{ pathname: "/job-list" }}>
              <button
                // onClick={this.props.setLogin}
                className="btn--bookADemo btn navigation--btn"
              >
                View Open Jobs
              </button>
            </Link>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Navigation;
