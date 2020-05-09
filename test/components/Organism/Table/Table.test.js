/* eslint-env jest */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
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

  test('Table renders header properly', () => {
    const { getByText } = render(
      <Table columns={columns} records={records} />
    )
    let linkElement = getByText(/Name/)
    expect(linkElement).toBeInTheDocument()
    linkElement = getByText(/Email/)
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

  test('Event gets fired properly when a row is clicked in the table', () => {
    const onRowClick = jest.fn()
    const { getByText } = render(
      <Table columns={columns} records={records} onRowClick={onRowClick} />
    )
    let linkElement = getByText(/Upendra Dhakal/i)
    expect(linkElement).toBeInTheDocument()
    fireEvent.click(linkElement)
    expect(onRowClick).toHaveBeenCalledTimes(1)
    expect(onRowClick).toHaveBeenNthCalledWith(1, records[0], 0)
    linkElement = getByText(/dhakal.upenn@gmail.com/i)
    fireEvent.click(linkElement)
    expect(onRowClick).toHaveBeenCalledTimes(2)
    expect(onRowClick).toHaveBeenNthCalledWith(1, records[0], 0)
    expect(linkElement).toBeInTheDocument()
  })

  test('Make sure when you hover over to clickable row, row gets the class `clickable`', () => {
    const onRowClick = jest.fn()
    const { getByRole } = render(
      <table>
        <tbody>
          <TableRow columns={columns} record={records[0]} onRowClick={onRowClick} />
        </tbody>
      </table>
    )
    const linkElement = getByRole('button')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveClass('clickable')
  })

  test('Renders the table properly', () => {
    const { getByText } = render(<Table columns={columns} records={records} />)
    const linkElement = getByText(/Upendra Dhakal/i)
    expect(linkElement).toBeInTheDocument()
  })
})
