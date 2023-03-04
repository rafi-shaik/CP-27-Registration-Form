// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {firstName: '', lastName: '', isSubmitted: false}

  elementBlurFirstName = event => {
    if (event.target.value === '') {
      return <p className="error-msg">*Required</p>
    }
    return null
  }

  elementBlurLastName = event => {
    if (event.target.value === '') {
      return <p className="error-msg">*Required</p>
    }
    return null
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  restForm = () => {
    this.setState({isSubmitted: false})
  }

  submitForm = () => {
    const {firstName, lastName} = this.state
    if (firstName && lastName) {
      this.setState({isSubmitted: true})
    }
  }

  renderForm = () => {
    const {firstName, lastName} = this.state
    return (
      <div className="card-container">
        <div className="input-container">
          <label htmlFor="firstName" className="label">
            FIRST NAME
          </label>
          <input
            onBlur={this.elementBlurFirstName}
            onChange={this.onChangeFirstName}
            placeholder="First Name"
            id="firstName"
            type="text"
            className="input-elem"
            value={firstName}
          />
          {this.elementBlurFirstName()}
        </div>
        <div className="input-container">
          <label htmlFor="lastName" className="label">
            LAST NAME
          </label>
          <input
            onBlur={this.elementBlurLastName}
            onChange={this.onChangeLastName}
            placeholder="Last Name"
            id="lastName"
            type="text"
            className="input-elem"
            value={lastName}
          />
          {this.elementBlurLastName()}
        </div>
        <button type="button" className="submit-btn" onClick={this.submitForm}>
          Submit
        </button>
      </div>
    )
  }

  renderSubmitCard = () => (
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-logo"
      />
      <p className="description">Submitted Successfully</p>
      <button onClick={this.restForm} className="submit-btn" type="button">
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Registration</h1>
        {isSubmitted ? this.renderSubmitCard() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
