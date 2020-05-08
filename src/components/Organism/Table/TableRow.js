import React from 'react'
import TableCell from '../../Molecules/TableCell'
import PropTypes from 'prop-types'

const TableRow = (props) => {
  const {
    columns = [],
    record = {},
    selectionKey = '',
    onRowClick
  } = props

  const handleRowClick = () => {
    onRowClick(record)
  }

  return (
    <tr onClick={handleRowClick}>
      {
        columns.map((column, index) => {
          const { dataName } = column
          const cellKey = selectionKey ? record[selectionKey] : index
          return <TableCell data={record[dataName]} key={cellKey} />
        })
      }
    </tr>
  )
}

export default TableRow

TableRow.propTypes = {
  /** Array of Column object that configures a column */
  columns: PropTypes.arrayOf(PropTypes.shape(
    {
      /** Name of the column */
      name: PropTypes.string
    }
  )),
  /** Record that represents the row */
  record: PropTypes.object,
  /** The dataName/columnName that can uniquely idenify a record */
  selectionKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
