import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="FormDetails">
        <div className="FormDetails--heading">Apply For This Job</div>
        <form className="form">
          <input
            type="text"
            className="form__input"
            placeholder="Your Name *"
            required
            // onChange={this.nameChange}
            // value={this.state.Name}
          />
          <input
            type="text"
            className="form__input"
            placeholder="Your Mobile Number *"
            required
            // onChange={this.mobileChange}
            // value={this.state.MobileNumber}
          />
          <input
            type="email"
            className="form__input"
            placeholder="Your Email *"
            required
            // onChange={this.emailChange}
            // value={this.state.Email}
          />

          <input
            type="text"
            className="form__input"
            placeholder="Your Highest Qualification *"
            required
            // onChange={this.emailChange}
            // value={this.state.Email}
          />

          <div className="flexrow">
            <select
              className="select-css"
              required
              // onChange={this.identityChange}
              // value={this.state.Identity}
            >
              <option value="" defaultValue>
                Enter Years of Experience *
              </option>
              <option value="Fresher">Fresher</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <button
            className="FormDetails--btn"
            style={{
              margin: "1rem 0",
              background: "#F3F3F3",
              color: "rgba(0,0,0,0.7)",
            }}
            // onClick={this.formData}
          >
            Upload Resume *
          </button>

          <textarea
            type="text"
            className="form__input"
            placeholder="Tell Something about you.."
            // onChange={this.emailChange}
            // value={this.state.Email}
          />

          <button
            type="submit"
            className="FormDetails--btn submitBtnStyle"

            // onClick={this.formData}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
