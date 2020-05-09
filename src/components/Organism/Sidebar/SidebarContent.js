import React from 'react'
import SidebarOption from './SidebarOption'

const SidebarContent = (props) => {
  const {
    items = []
  } = props
  return (
    <>
      {
        items.map((item, index) => {
          const { name, onClick, path } = item
          return (
            <SidebarOption
              key={index}
              onClick={onClick}
              name={name}
              path={path}
            />
          )
        })
      }
    </>
  )
}

export default SidebarContent
