
import React from 'react'
import TableRow from './TableRow'
import Header from './TableHeader'
import StyledTableWrapper from './Styles.TableWrapper'

const Table = (props) => {
  const {
    columns = [],
    records = [],
    selectionKey = '',
    onRowClick
  } = props

  return (
    <StyledTableWrapper>
      <tbody>
        <Header columns={columns} />
        {
          records.map((record, index) => {
            return (
              <TableRow
                dataIndex={index}
                key={record[selectionKey] || index}
                columns={columns}
                record={record}
                onRowClick={onRowClick}
              />
            )
          })
        }
      </tbody>
    </StyledTableWrapper>
  )
}

export default Table
