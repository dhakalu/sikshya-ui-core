import React from 'react'
import { withInfo } from '@storybook/addon-info'
import Sidebar from '../../../src/components/Organism/Sidebar/Sidebar'
import { sidebarConfig } from '../../../src/data-stubs/sidebarConfig'

const info = {
  text: `
    # Welcome!

    Hi there! This is a component library.
  `
}

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  decorators: [
    withInfo(info)
  ]
}

export const sidebarWithConfig = () => <Sidebar title='Trilok Academy' config={sidebarConfig} />
