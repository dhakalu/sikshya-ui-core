
import { StyledLabel } from './styles'
import PropTypes from 'prop-types'
import React from 'react'

const InputLabel = (props) => {
  const {
    label
  } = props

  return (
    <StyledLabel>
      {label}
    </StyledLabel>
  )
}

InputLabel.propTypes = {
  /**
     * String to use as label
     */
  label: PropTypes.string
}

export default InputLabel
