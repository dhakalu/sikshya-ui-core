/* eslint-env jest */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Table from '../../../../src/components/Organism/Table'
import TableRow from '../../../../src/components/Organism/Table/TableRow'
import TableCell from '../../../../src/components/Molecules/TableCell'

const columns = [
  {
    dataName: 'name',
    name: 'Name'
  },
  {
    dataName: 'email',
    name: 'Email'
  }
]

const records = [
  {
    name: 'Upendra Dhakal',
    email: 'dhakal.upenn@gmail.com'
  }
]

describe('Table', () => {
  test('Table cell shows data', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <tr>
            <TableCell data={records[0].name} />
          </tr>
        </tbody>
      </table>
    )
    const linkElement = getByText(/Upendra Dhakal/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('Renders Table Row Properly', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <TableRow columns={columns} record={records[0]} />
        </tbody>
      </table>
    )
    let linkElement = getByText(/Upendra Dhakal/i)
    expect(linkElement).toBeInTheDocument()
    linkElement = getByText(/dhakal.upenn@gmail.com/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('Renders the table properly', () => {
    const { getByText } = render(<Table columns={columns} records={records} />)
    const linkElement = getByText(/Upendra Dhakal/i)
    expect(linkElement).toBeInTheDocument()
  })
})
