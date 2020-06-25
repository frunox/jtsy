import React, { useState, useContext } from "react";
import API from "../../utils/API";
import DevDataContext from "../../contexts/DevDataContext"
// import { Redirect } from "react-router-dom";

// const emailRegex = RegExp(
//   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );

console.log('in CreateAccountcomp')

// handleInputChange is a prop from page Signin.js
const CreateAccountComp = (props) => {
  const { devData } = useContext(DevDataContext);
  const [state, setState] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    linkedInLink: null,
    resumeLink: null,
    portfolioLink: null,
    githubID: null,
    loaded: null,
  });


  // handleInputChange is a prop from page Signin.js
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HMMMM leaving CreateAccountcomp");
    props.handleInputChange();
    console.log('CreateAccountcomp call getsync()', state.githubID);
    localStorage.setItem('password', state.password);
    // {developerLoginName: "frunox"}, {$set: {lname: "Black", fname: "Bob"}}
    // let obj1 = { developerLoginName: state.githubID, fname: state.firstName, lname: state.lastName, email: state.email }
    // console.log('to db: ', obj1)
    API.getsync(state.githubID);
    // state.loaded = true;
    const developerData = {
      repositories: [],
      developerLoginName: state.githubID,
      developerGithubID: " ",
      fname: state.firstName,
      lname: state.lastName,
      email: state.email,
      linkedInLink: state.linkedInLink,
      resumeLink: state.resumeLink,
      portfolioLink: state.portfolioLink,
      active: true
    }
    console.log('in createAcctComp: call updateDeveloper')
    API.updateDeveloper(developerData)
    setState({
      ...state,
      loaded: true
    })
    devData.developerGithubID = state.developerGithubID;
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  // console.log("Try", this.state.loaded);
  // if (this.state.loaded) {
  //   return <Redirect to={"/Home"} />;
  // }
  let content = (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Create Account</h1>
        <h4>* - Denotes Required Field</h4>
        <form onSubmit={handleSubmit}>
          <div className="firstName">
            <label htmlFor="firstName">First Name*</label>
            <input
              placeholder="First Name"
              type="text"
              name="firstName"
              required
              onChange={handleChange}
            />
          </div>
          <div className="lastName">
            <label htmlFor="lastName">Last Name*</label>
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              required
              onChange={handleChange}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          {/* Git hub */}
          <div className="githubID">
            <label htmlFor="githubID">Github ID*</label>
            <input
              placeholder="Github ID"
              type="text"
              name="githubID"
              required
              onChange={handleChange}
            />
          </div>
          {/* Git hub */}
          {/* LinkedIn */}
          <div className="linkedInLink">
            <label htmlFor="linkedInLink">LinkedIn Link</label>
            <input
              placeholder="LinkedIn link"
              type="text"
              name="linkedInLink"
              onChange={handleChange}
            />
          </div>
          {/* LinkedIn */}
          {/* resume */}
          <div className="resumeLink">
            <label htmlFor="resumeLink">Resume Link</label>
            <input
              placeholder="Resume link"
              type="text"
              name="resumeLink"
              onChange={handleChange}
            />
          </div>
          {/* resume */}
          {/* portfolio */}
          <div className="portfolioLink">
            <label htmlFor="portfolioLink">Portfolio Link</label>
            <input
              placeholder="portfolio link"
              type="text"
              name="portfolioLink"
              onChange={handleChange}
            />
          </div>
          {/* portfolio */}
          <div className="password">
            <label htmlFor="password">Password*</label>
            <input
              placeholder="Password"
              type="password"
              name="password"
              required
              pattern="(?=.*\d)(?=.*[!@_#$%^&*-])(?=.*[a-z])(?=.*[A-Z]).{6,}"
              onChange={handleChange}
            />
          </div>
          <div className="createAccount">
            <button type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
  return content;
}

export default CreateAccountComp;
