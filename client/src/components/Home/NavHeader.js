import React, { Component } from "react";
import more from "../../images/more.png";

class NavHeader extends Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
    };
  }

  toggleMore = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    const {
      color1,
      color2,
      bgColor1,
      bgColor2,
      color3,
      color4,
      bgColor3,
      bgColor4,
    } = this.props;
    const { showMore } = this.state;
    return (
      <div className="navHeader">
        <div className="navHeader__logoDiv">
          <img src="" alt="" className="navHeader__logoDiv--clp" />
          <button
            style={{ background: bgColor1, color: color1 }}
            className="navHeader__logoDiv--applicant"
            onClick={() => this.props.setCurrentState(1)}
          >
            Applicant
          </button>
          <button
            style={{ background: bgColor2, color: color2 }}
            className="navHeader__logoDiv--job"
            onClick={() => this.props.setCurrentState(2)}
          >
            Job Listings
          </button>
        </div>
        <div className="navHeader__button">
          <div className="navHeader__button--threeDots">
            <img onClick={this.toggleMore} src={more} alt="more" />
          </div>
        </div>
        {showMore ? (
          <div className="navHeader__More">
            <label
              style={{ background: bgColor3, color: color3 }}
              className="navHeader__More--applicant"
              onClick={() => {
                this.props.setCurrentState(1);
                this.toggleMore();
              }}
            >
              Applicant
            </label>
            <label
              style={{ background: bgColor4, color: color4 }}
              className="navHeader__More--job"
              onClick={() => {
                this.props.setCurrentState(2);
                this.toggleMore();
              }}
            >
              Job Listings
            </label>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default NavHeader;
