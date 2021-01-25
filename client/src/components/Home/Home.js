import React, { Component } from "react";
import Applicant from "./Applicant";
import Footer from "../../components/Footer";
import Navigation from "../../components/Home/NavHeader";
import JobListing from "./JobListing";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      currentState: 1,
      bgColor1: "#ffffff",
      bgColor2: "#0e3a62",
      color1: "#0e3a62",
      color2: "#ffffff",
      bgColor3: "rgb(230, 247, 255)",
      bgColor4: "#ffffff",
      color3: "rgb(24, 144, 255)",
      color4: "#222222",
      currentIndex: 0,
      jobListArray: [
        {
          jobTitle: "Frontend Developer",
          location: "Bangalore",
          Description:
            "wqdqwdqasddsd ad as da sasdasd a da dssa da sdsdasd asd asdasd asd as das das dasdasd asd asd asda sdasd",
        },
        {
          jobTitle: "Backend Developer",
          location: "Mangalore",
          Description:
            "wqdqwdqasddsd ad as da sasdasd a da dssa da sdsdasd asd asdasd asd as das das dasdasd asd asd asda sdasd",
        },
        {
          jobTitle: "Android Developer",
          location: "Delhi",
          Description:
            "wqdqwdqasddsd ad as da sasdasd a da dssa da sdsdasd asd asdasd asd as das das dasdasd asd asd asda sdasd",
        },
        {
          jobTitle: "Senior Frontend Developer",
          location: "Noida",
          Description:
            "wqdqwdqasddsd ad as da sasdasd a da dssa da sdsdasd asd asdasd asd as das das dasdasd asd asd asda sdasd",
        },
        {
          jobTitle: "HR Intern",
          location: "Noida",
          Description:
            "wqdqwdqasddsd ad as da sasdasd a da dssa da sdsdasd asd asdasd asd as das das dasdasd asd asd asda sdasd",
        },
      ],
      jobListingArr: [
        // {
        //   jobTitle: "",
        //   location: "",
        //   Description: "",
        // },
      ],
    };
  }

  updateJobList = (index, type, e) => {
    const { jobListingArr } = this.state;
    const list = [...jobListingArr];

    list[index][type] = e.target.value;

    this.setState({
      jobListingArr: [...list],
    });
  };

  onSubmitAddList = () => {
    const { jobListingArr, jobListArray } = this.state;
    const list = [...jobListArray, ...jobListingArr];
    this.setState({ jobListArray: list });
  };

  addJobList = () => {
    const { jobListingArr } = this.state;
    const list = [{ jobTitle: "", location: "", Description: "" }];

    this.setState({
      jobListingArr: [list],
      currentIndex: this.state.currentIndex,
    });
  };

  removeFieldFromJobList = (currentIndex) => {
    const { jobListArray } = this.state;
    const list = [...jobListArray];
    list.splice(currentIndex, 1);

    this.setState({
      jobListArray: [...list],
    });
  };

  setCurrentState = (givenState) => {
    this.setState({ currentState: givenState }, () => {
      if (this.state.currentState === 1) {
        this.setState({
          color1: "#0e3a62",
          color2: "#ffffff",
          bgColor1: "#ffffff",
          bgColor2: "#0e3a62",
          color3: "rgb(24, 144, 255)",
          color4: "#222222",
          bgColor3: "rgb(230, 247, 255)",
          bgColor4: "#ffffff",
        });
      } else {
        this.setState({
          color2: "#0e3a62",
          color1: "#ffffff",
          bgColor2: "#ffffff",
          bgColor1: "#0e3a62",
          color4: "rgb(24, 144, 255)",
          color3: "#222222",
          bgColor4: "rgb(230, 247, 255)",
          bgColor3: "#ffffff",
        });
      }
    });
  };

  render() {
    const {
      currentState,
      bgColor1,
      bgColor2,
      color1,
      color2,
      bgColor3,
      bgColor4,
      color3,
      color4,
      jobListingArr,
      currentIndex,
      jobListArray,
    } = this.state;

    return (
      <div className="home">
        <Navigation
          bgColor1={bgColor1}
          bgColor2={bgColor2}
          color1={color1}
          color2={color2}
          bgColor3={bgColor3}
          bgColor4={bgColor4}
          color3={color3}
          color4={color4}
          currentState={currentState}
          setCurrentState={this.setCurrentState}
        />
        {currentState === 1 ? (
          <Applicant jobListArray={jobListArray} />
        ) : (
          <JobListing
            currentIndex={currentIndex}
            jobListingArr={jobListingArr}
            jobListArray={jobListArray}
            updateJobList={this.updateJobList}
            onSubmitAddList={this.onSubmitAddList}
            addJobList={this.addJobList}
            removeFieldFromJobList={this.removeFieldFromJobList}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default Home;
