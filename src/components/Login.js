import React from "react";

export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <form className="inputs">
          <label htmlFor="userName">User Name</label>
          <input type="text" name="userName" className="formInput" required />
          <label htmlFor="password">Password</label>
          <input type="text" name="password" className="formInput" required />
          <input
            type="Submit"
            name="formSubmit"
            className="loginSubmit"
            id="loginSubmit"
          />
        </form>
      </div>
    );
  }
}
