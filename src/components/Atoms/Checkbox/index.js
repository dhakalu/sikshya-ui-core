import React, { useState } from 'react'
import CheckboxWrapper from './styles'
import PropTypes from 'prop-types'

const Checkbox = (props) => {
  const {
    initialChecked = false,
    onCheck = () => false,
    name
  } = props

  const [isChecked, setChecked] = useState(initialChecked)

  const handleClick = () => {
    const newState = !isChecked
    setChecked(newState)
    onCheck(newState)
  }

  return (
    <CheckboxWrapper
      checked={isChecked}
    >{name}
      <input
        type='checkbox'
        onClick={handleClick}
      />
      <span />
    </CheckboxWrapper>
  )
}

export default Checkbox
Checkbox.propTypes = {
  /** The checkbox is checked at first or not. It's value is false by default. */
  initialChecked: PropTypes.bool,
  /** The function that gets called when user clicks on the checkbox */
  onCheck: PropTypes.func.isRequired,
  /** The name to appear on the checkbox */
  name: PropTypes.string.isRequired
}
