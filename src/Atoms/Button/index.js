import StyledButton, { BUTTON_TYPES } from './styles'
import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const {
    name = '',
    // size = 'small',
    buttonType = 'standard',
    disabled = false,
    onClick = () => false
  } = props

  const handleClick = (event) => {
    if (!disabled) onClick(event)
  }

  return (
    <StyledButton
      buttonType={buttonType}
      onClick={handleClick}
      disabled={disabled}
    > {name}
    </StyledButton>
  )
}
export default Button

Button.propTypes = {
  /** The type of button being used. This determines the styling of the buttons */
  buttonType: PropTypes.oneOf([BUTTON_TYPES.destroyed,
    BUTTON_TYPES.diminished,
    BUTTON_TYPES.primary,
    BUTTON_TYPES.secondary,
    BUTTON_TYPES.secondaryReverse
  ]).isRequired,
  /** The function that gets called when user cliks on the button */
  onClick: PropTypes.func.isRequired,
  /** The label that appers on the button */
  name: PropTypes.string.isRequired,
  /** Disables the button */
  disabled: PropTypes.bool
}
