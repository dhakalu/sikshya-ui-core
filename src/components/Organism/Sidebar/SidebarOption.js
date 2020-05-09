import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SidebarOptionWrapper from './SidebarOptionWrapper'

const SidebarOption = props => {
  const {
    name = '',
    path = '',
    onClick = () => false
  } = props

  const handleClick = () => {
    onClick(path)
  }

  return (
    <Link to={path}>
      <SidebarOptionWrapper
        role='button'
        onClick={handleClick}
      >{name}
      </SidebarOptionWrapper>
    </Link>
  )
}

export default SidebarOption

SidebarOption.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
}
