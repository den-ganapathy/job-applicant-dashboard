import React, { Component } from "react";
import close from "../../images/Close.svg";

class Applicant extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      currentJob: "Frontend Developer",
      allApplicant: [
        {
          id: 1,
          job: "Frontend Developer",
          name: "Karthik",
          keySkill: "",
          email: "abc@company.com",
          contactNo: 9887765557,
          status: "Applied",
          description:
            "wqdqwdqasddsd ad as da sasdasd a da dssa da sdsdasd asd asdasd asd as das das dasdasd asd asd asda sdasd",
        },
        {
          id: 2,
          job: "Backend Developer",
          name: "Swapnil",
          keySkill: "",
          email: "abc@company.com",
          contactNo: 9887765557,
          status: "Applied",
          description:
            "wqdqwdqasddsd ad as da sasdasd a da dssa da sdsdasd asd asdasd asd as das das dasdasd asd asd asda sdasd",
        },
        {
          id: 3,
          job: "Frontend Developer",
          name: "Rakshith",
          keySkill: "",
          email: "abc@company.com",
          contactNo: 9887765557,
          status: "Applied",
          description:
            "wqdqwdqasddsd ad as da sasdasd a da dssa da sdsdasd asd asdasd asd as das das dasdasd asd asd asda sdasd",
        },
        {
          id: 4,
          job: "Frontend Developer",
          name: "Apoorva",
          keySkill: "",
          email: "abc@company.com",
          contactNo: 9887765557,
          status: "Applied",
          description:
            "wqdqwdqasddsd ad as da sasdasd a da dssa da sdsdasd asd asdasd asd as das das dasdasd asd asd asda sdasd",
        },
        {
          id: 5,
          job: "Backend Developer",
          name: "Ganapathy",
          keySkill: "",
          email: "abc@company.com",
          contactNo: 9887765557,
          status: "Applied",
          description:
            "wqdqwdqasddsd ad as da sasdasd a da dssa da sdsdasd asd asdasd asd as das das dasdasd asd asd asda sdasd",
        },
        {
          id: 6,
          job: "Backend Developer",
          name: "Lekhak",
          keySkill: "",
          email: "abc@company.com",
          contactNo: 9887765557,
          status: "Applied",
          description:
            "wqdqwdqasddsd ad as da sasdasd a da dssa da sdsdasd asd asdasd asd as das das dasdasd asd asd asda sdasd",
        },
        {
          id: 7,
          job: "Backend Developer",
          name: "Arti",
          keySkill: "",
          email: "abc@company.com",
          contactNo: 9887765557,
          status: "Applied",
          description:
            "wqdqwdqasddsd ad as da sasdasd a da dssa da sdsdasd asd asdasd asd as das das dasdasd asd asd asda sdasd",
        },
        {
          id: 8,
          job: "Android Developer",
          name: "Ramya",
          keySkill: "",
          email: "abc@company.com",
          contactNo: 9887765557,
          status: "Applied",
          description:
            "wqdqwdqasddsd ad as da sasdasd a da dssa da sdsdasd asd asdasd asd as das das dasdasd asd asd asda sdasd",
        },
      ],
      showModal: false,
      currentIndex: "",
      modalData: {
        id: "",
        job: "",
        name: "",
        keySkill: "",
        email: "",
        contactNo: "",
        status: "",
        description: "",
      },
    };
  }

  toggleModal = (id) => {
    this.setState({ showModal: !this.state.showModal }, () => {
      let indexSelected = this.state.allApplicant.findIndex((x) => x.id === id);
      let selectedValue = this.state.allApplicant[indexSelected];
      this.setState({ modalData: selectedValue, currentIndex: indexSelected });
    });
  };

  changeStatus = (e) => {
    const { modalData } = this.state;
    this.setState({
      modalData: {
        id: modalData.id,
        job: modalData.job,
        name: modalData.name,
        keySkill: modalData.keySkill,
        email: modalData.email,
        contactNo: modalData.contactNo,
        status: e.target.value,
        description: modalData.description,
      },
    });
  };

  assignInterviewer = (e) => {
    const { modalData } = this.state;
    this.setState({
      modalData: {
        id: modalData.id,
        job: modalData.job,
        name: modalData.name,
        keySkill: modalData.keySkill,
        email: modalData.email,
        contactNo: modalData.contactNo,
        status: modalData.status,
        description: modalData.description,
        interviewer: e.target.value,
      },
    });
  };

  addNotes = (e) => {
    const { modalData } = this.state;
    this.setState({
      modalData: {
        id: modalData.id,
        job: modalData.job,
        name: modalData.name,
        keySkill: modalData.keySkill,
        email: modalData.email,
        contactNo: modalData.contactNo,
        status: modalData.status,
        description: modalData.description,
        interviewer: modalData.interviewer,
        notes: e.target.value,
      },
    });
  };

  saveDetails = () => {
    this.setState(
      {
        allApplicant: this.state.allApplicant.concat(this.state.modalData),
      },
      () => {
        const { allApplicant } = this.state;
        const list = [...allApplicant];
        list.splice(this.state.currentIndex, 1);

        this.setState(
          {
            allApplicant: [...list],
          },
          () => {
            this.toggleModal();
            console.log(this.state.allApplicant);
          }
        );
      }
    );
  };

  selectedTitle = (index, job) => {
    this.setState({ activeIndex: index, currentJob: job });
  };

  render() {
    const { jobListArray } = this.props;
    const {
      activeIndex,
      allApplicant,
      currentJob,
      showModal,
      modalData,
    } = this.state;
    console.log(allApplicant);
    return (
      <div className="applicant">
        <div className="applicant__head">
          <label className="applicant__head--app">Applicant</label>
          <button className="applicant__head--btn">+ Manual Insert</button>
        </div>
        <div className="applicant__body">
          <div className="applicant__body--col1">
            {jobListArray.map((data, index) => {
              return (
                <div
                  key={index}
                  style={
                    activeIndex === index
                      ? window.screen.availWidth < 600
                        ? {
                            background: "#ffffff",
                            color: "#1890ff",
                            borderBottom: "2px solid #1890ff",
                          }
                        : {
                            background: "#e6f7ff",
                            color: "#1890ff",
                            borderRight: "2px solid #1890ff",
                          }
                      : null
                  }
                  className="applicant__body--col1__list"
                  onClick={() => this.selectedTitle(index, data.jobTitle)}
                >
                  {data.jobTitle}
                </div>
              );
            })}
          </div>
          <div className="applicant__body--col2">
            {allApplicant.map((data, index) => {
              return (
                <div
                  onClick={() => this.toggleModal(data.id)}
                  key={index}
                  style={
                    currentJob === data.job
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                  className="applicant__body--col2__applicant"
                >
                  <div className="applicant__body--col2__applicant--name">
                    <span className="labelMobile">Name:</span>
                    <span className="labelName">{data.name}</span>
                  </div>
                  <div className="applicant__body--col2__applicant--status">
                    <span className="labelMobile">Status:</span>
                    <label
                      className="labelStatus"
                      style={
                        data.status === "Interview"
                          ? {
                              color: "#faad14",
                              background: "#fffbe6",
                              border: "1px solid #ffe58f",
                              padding: "0.4rem",
                              borderRadius: "4px",
                            }
                          : data.status === "Applied"
                          ? {
                              color: "#eb2f96",
                              background: "#fff0f6",
                              border: "1px solid #ffadd2",
                              padding: "0.4rem",
                              borderRadius: "4px",
                            }
                          : {
                              color: "#52c41a",
                              background: "#f6ffed",
                              border: "1px solid #b7eb8f",
                              padding: "0.4rem",
                              borderRadius: "4px",
                            }
                      }
                    >
                      {data.status}
                    </label>
                  </div>
                  <div className="applicant__body--col2__applicant--number">
                    <span className="labelMobile">Contact No:</span>
                    <span className="labelContact">{data.contactNo}</span>
                  </div>
                  <div className="applicant__body--col2__applicant--description">
                    <span className="labelMobile">Feedback:</span>
                    <span className="labelFeedback">{data.description}</span>
                  </div>
                </div>
              );
            })}
          </div>
          {showModal ? (
            <div className="applicant__modal">
              <div className="applicant__modal--container">
                <div className="applicant__modal--container__header">
                  <label>Information</label>
                  <img
                    onClick={this.toggleModal}
                    style={{ width: "1.2rem" }}
                    src={close}
                    alt="close"
                    className="applicant__modal--container__header--close"
                  />
                </div>
                <div className="applicant__modal--container__body">
                  <div className="applicant__modal--container__body--col">
                    <div className="applicant__modal--container__body--col__key">
                      <label>Name</label>
                      <label>:</label>
                    </div>
                    <div className="applicant__modal--container__body--col__value">
                      {modalData && modalData.name}
                    </div>
                  </div>
                  <div className="applicant__modal--container__body--col">
                    <div className="applicant__modal--container__body--col__key">
                      <label>Email</label>
                      <label>:</label>
                    </div>
                    <div className="applicant__modal--container__body--col__value">
                      {modalData && modalData.email}
                    </div>
                  </div>
                  <div className="applicant__modal--container__body--col">
                    <div className="applicant__modal--container__body--col__key">
                      <label>Resume / CV</label>
                      <label>:</label>
                    </div>
                    <div className="applicant__modal--container__body--col__value">
                      <button className="cvDownload">Download</button>
                    </div>
                  </div>
                  <div className="applicant__modal--container__body--col">
                    <div className="applicant__modal--container__body--col__key">
                      <label>Status</label>
                      <label>:</label>
                    </div>
                    <div className="applicant__modal--container__body--col__value">
                      <select
                        value={modalData && modalData.status}
                        className="applicant__modal--container__body--col__value--select"
                        onChange={this.changeStatus}
                      >
                        <option id="Applied">Applied</option>
                        <option id="Interview">Interview</option>
                        <option id="Offer">Offer</option>
                      </select>
                    </div>
                  </div>
                  <div className="applicant__modal--container__body--col">
                    <div className="applicant__modal--container__body--col__key">
                      <label>Position</label>
                      <label>:</label>
                    </div>
                    <div className="applicant__modal--container__body--col__value">
                      {modalData && modalData.description}
                    </div>
                  </div>
                  <div className="applicant__modal--container__body--col">
                    <div className="applicant__modal--container__body--col__key">
                      <label>Next Round Interviewer</label>
                      <label>:</label>
                    </div>
                    <div className="applicant__modal--container__body--col__value">
                      <select
                        onChange={this.assignInterviewer}
                        className="applicant__modal--container__body--col__value--select"
                      >
                        <option>---Select---</option>
                        <option id="Sahil Chitkara">Sahil Chitkara</option>
                        <option id="Abhishek Sachar">Abhishek Sachar</option>
                      </select>
                    </div>
                  </div>
                  <div className="applicant__modal--container__body--col">
                    <div className="applicant__modal--container__body--col__key">
                      <label>Notes</label>
                      <label>:</label>
                    </div>
                    <div className="applicant__modal--container__body--col__value">
                      <textarea
                        className="applicant__modal--container__body--col__value--textarea"
                        type="text"
                        rows="4"
                        cols="50"
                        onChange={this.addNotes}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="applicant__modal--container__foot">
                  <button
                    onClick={this.saveDetails}
                    className="applicant__modal--container__foot--btn"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Applicant;
