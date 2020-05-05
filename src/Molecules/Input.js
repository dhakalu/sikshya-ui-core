import React, { useState } from 'react'
import PropTypes from 'prop-types'
import InputWrapper from './styles/InputWrapper'
import StyledInput from './styles/StyledInput'
import InputLabel from '../Atoms/InputLabel'
import ErrorMessage from './styles/ErrorMessage'

const Input = props => {
  const {
    label = '',
    className,
    hasError,
    disabled = false,
    errorMessage = '',
    placeholder = '',
    size = 'medium',
    validator,
    value = '',
    regex = '',
    onChange = () => false
  } = props

  const [error, setError] = useState('')
  const wrapperClasses = `${className} ${hasError ? 'has-error' : ''} ${disabled ? 'disabled' : ''}`
  const handleChange = (event) => {
    const value = event.target.value
    let isValid = true
    if (validator && !validator(event.target.value)) isValid = false
    if (regex && !value.match(regex)) isValid = false
    if (!isValid) setError(errorMessage || 'Please provide a valid input')
    onChange({
      value,
      error
    })
  }

  return (
    <InputWrapper className={wrapperClasses}>
      {
        label ? (
          <InputLabel label={label} />
        ) : null
      }
      <StyledInput {...props} onChange={handleChange} />
      {
        hasError && errorMessage ? (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        ) : null
      }
    </InputWrapper>
  )
}

Input.propTypes = {
  /** Optional label to show in input. Label MUST be used if there is no primary way to tell what the input means */
  label: PropTypes.string,
  /** Optional place holder to display in input. Placeholders are not and should not be used as replacements to the label */
  placeholder: PropTypes.string,
  /** Size of input determines the height of input. Can be one of medium, small or large */
  size: PropTypes.oneOf(['medium', 'small', 'large']),
  /** The value of current input. */
  value: PropTypes.any,
  /** Indicates weather the user's input is incorrect. If true, user has not entered the expected value */
  hasError: PropTypes.bool,
  /** Error message to show to users, if there is any error */
  errorMessage: PropTypes.string,
  /** Validation function takes value as input and returns true if value is a valid value,
   * false otherwise. This function gets invoked beofre every onChange method.
   * It is good practive to pass `errorMessage` prop when this prop is used.
   * */
  validator: PropTypes.func
}

Input.defaultProps = {
  hasError: false
}

export default Input
