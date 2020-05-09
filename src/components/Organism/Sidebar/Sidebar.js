import React from 'react'
import PropTypes from 'prop-types'
import SidebarWrapper from './SidebarWrapper'
import Header from '../../Molecules/Header'
import SidebarContent from './SidebarContent'

export const Sidebar = (props) => {
  const {
    title = 'Sample Title',
    config = undefined,
    children
  } = props

  return (
    <SidebarWrapper>
      <Header
        title={title}
      />
      {
        children || (
          <SidebarContent {...config} />
        )
      }
    </SidebarWrapper>
  )
}

export default Sidebar

Sidebar.propTypes = {
  /** Optionalside config object to show the sidebar content.
     * when children prop is passed this will be ignored
     */
  config: PropTypes.any,
  /** Title to show on the sidebar */
  title: PropTypes.string,
  /** React Component that will be rendered on sidebar */
  children: PropTypes.any
}
