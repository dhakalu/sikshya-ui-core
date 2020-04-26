
import { StyledLabel } from './styles'
import PropTypes from 'prop-types'
import React from 'react'

const Label = (props) => {
  const {
    label
  } = props

  return (
    <StyledLabel>
      {label}
    </StyledLabel>
  )
}

Label.propTypes = {
  /**
     * String to use as label
     */
  label: PropTypes.string
}

export default Label
