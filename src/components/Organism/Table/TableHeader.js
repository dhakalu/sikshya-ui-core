import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
  const {
    columns
  } = props
  return (
    <tr>
      {
        columns.map(column => {
          return (
            <th key={column.name}>
              {column.name}
            </th>
          )
        })
      }
    </tr>
  )
}

export default Header

Header.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape(
    {
      name: PropTypes.string
    }
  ))
}
