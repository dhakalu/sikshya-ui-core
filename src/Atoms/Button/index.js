import StyledButton from './styles'
import React from 'react'

const Button = (props) => {
  const {
    name = 'You stupid!',
    // size = 'small',
    buttonType = 'standard',
    onClick = () => false
  } = props

  return <StyledButton buttonType={buttonType} onClick={onClick}> {name}</StyledButton>
}

export default Button
