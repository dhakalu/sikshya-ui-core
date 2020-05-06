import StyledButton from './styles'
import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const {
    name = '',
    // size = 'small',
    buttonType = 'standard',
    onClick = () => false
  } = props

  return <StyledButton buttonType={buttonType} onClick={onClick}> {name}</StyledButton>
}

export default Button

export const BUTTON_TYPES = {
  destroyed: 'destroyed',
  diminished: 'diminished',
  primary: 'primary',
  secondaryReverse: 'secondaryReverse',
  secondary: 'secondary'
}

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
  name: PropTypes.string.isRequired
}
