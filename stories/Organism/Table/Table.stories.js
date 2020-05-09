import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { columns, records } from './data.stubs'
import Table from '../../../src/components/Organism/Table'

const info = {
  text: `
    # Welcome!

    Hi there! This is a component library.
  `
}

export default {
  title: 'Table',
  component: Table,
  decorators: [
    withInfo(info)
  ]
}

export const basicTable = () => <Table columns={columns} records={records} />

export const tableWithClickableRow = () => <Table columns={columns} records={records} onRowClick={() => true} />
