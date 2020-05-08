
import React from 'react'
import TableRow from './TableRow'

const Table = (props) => {
  const {
    columns = [],
    records = [],
    selectionKey = '',
    onRowClick = () => false
  } = props

  return (
    <table>
      <tbody>
        {
          records.map((record, index) => {
            return (
              <TableRow
                key={record[selectionKey] || index}
                columns={columns}
                record={record}
                onRowClick={() => onRowClick(record, index)}
              />
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table
