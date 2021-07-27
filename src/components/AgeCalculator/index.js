import {Component} from 'react'

import './index.css'

class AgeCalculator extends Component {
  state = {yearOfBirth: '', showError: false, showResult: false}

  setIsResultVisible = value => {
    this.setState({showResult: value})
  }

  setIsErrorOccurred = value => {
    this.setState({showError: value})
  }

  getCalculatedAge = () => {
    const {yearOfBirth} = this.state

    const dateOfBirth = new Date(yearOfBirth)
    const dateOfBirthYear = dateOfBirth.getFullYear()

    const presentDate = new Date()
    const presentDateYear = presentDate.getFullYear()

    return presentDateYear - dateOfBirthYear
  }

  onClickAgeCalculate = () => {
    const {yearOfBirth} = this.state
    const age = this.getCalculatedAge()
    if (age > 0 && yearOfBirth.length <= 4 && Number.isInteger(age)) {
      this.setIsErrorOccurred(false)
      this.setIsResultVisible(true)
    } else {
      this.setIsErrorOccurred(true)
    }
  }

  renderCalculatedButton = () => (
    <div className="button-container">
      <button
        className="calculate-button"
        type="button"
        onClick={this.onClickAgeCalculate}
      >
        Calculate
      </button>
    </div>
  )

  getCalculateAgeText = () => {
    const calculatedAge = this.getCalculatedAge()

    if (calculatedAge === 1) {
      return `You are ${calculatedAge} year old by the end of 2021`
    }
    return ` you are ${calculatedAge} years old by the end of 2021 `
  }

  renderCalculatorAge = () => {
    const {showResult} = this.state

    return showResult ? (
      <p className="calculated-age-text">{this.getCalculateAgeText()}</p>
    ) : null
  }

  renderErrorMessage = () => {
    const {showError} = this.state

    return showError ? (
      <p className="error-message">Enter the year that you are Born</p>
    ) : null
  }

  onChangeYearOfBirth = event => {
    const {value} = event.target

    this.setState({yearOfBirth: value})
    this.setIsResultVisible(false)
    this.setIsErrorOccurred(false)
  }

  renderInputField = () => {
    const {yearOfBirth} = this.state

    return (
      <input
        className="input-field"
        placeholder="Enter the year that you are born"
        type="text"
        value={yearOfBirth}
        onChange={this.onChangeYearOfBirth}
      />
    )
  }

  renderAgeCalculator = () => (
    <div className="age-container">
      <h1 className="heading">Age Calculator</h1>
      <div className="form-container">
        <div className="input-with-error-container">
          {this.renderInputField()}
          {this.renderErrorMessage()}
        </div>
        {this.renderCalculatorAge()}
        {this.renderCalculatedButton()}
      </div>
    </div>
  )

  render() {
    return (
      <div className="container">
        {this.renderAgeCalculator()}
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/age-calculater-persons-img.png"
            alt="stages of human"
            className="age-calculator-image"
          />
        </div>
      </div>
    )
  }
}
export default AgeCalculator
