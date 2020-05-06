import React, { useState } from 'react'
import ToggleWrapper from './styles'

const Toggle = (porps) => {
  const {
    size = 'large',
    initialChecked = false,
    onToggle = () => false
  } = porps

  const [isToggled, setToggled] = useState(initialChecked)

  const handleClick = () => {
    const newState = !isToggled
    setToggled(!isToggled)
    onToggle(newState)
  }

  return (
    <ToggleWrapper
      size={size}
      checked={isToggled}
    >
      <input />
      <span onClick={handleClick} />
    </ToggleWrapper>
  )
}

export default Toggle
