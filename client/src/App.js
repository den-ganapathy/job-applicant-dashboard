import React, { Component } from "react";
import Home from "./components/Home/Home";
import JobApplication from "./components/JobApplication/JobApplication";
import ScrollToTop from "./ScrollToTop";
import JobForm from "./components/JobForm/JobForm"
import JobList from "./components/JobList/JobList"
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/career" component={JobApplication} />
              <Route exact path="/job-list" component={JobList} />
              <Route exact path="/apply-job" component={JobForm} />
              <Route render={() => <Redirect to="/home" />} />
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
