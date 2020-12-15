import React from "react";

export default class SignupForm extends React.Component {
  render() {
    return (
      <div className="signup">
        <article>
          <form className="inputs">
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" className="formInput" required />
            <label htmlFor="password">Password</label>
            <input type="text" name="password" className="formInput" required />
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="text"
              name="passwordConfirm"
              className="formInput"
              required
            />
            <input
              type="Submit"
              name="formSubmit"
              className="signupSubmit"
              id="signupSubmit"
            />
          </form>
        </article>
      </div>
    );
  }
}
