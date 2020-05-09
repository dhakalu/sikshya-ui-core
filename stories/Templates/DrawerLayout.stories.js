import React from 'react'
import { withInfo } from '@storybook/addon-info'
import DrawerLayout from '../../src/components/Templates/DrawerLayout/DrawerLayout'
import { sidebarConfig } from '../../src/data-stubs/sidebarConfig'

const info = {
  text: `
    # Welcome!

    Hi there! This is a component library.
  `
}

export default {
  title: 'Templates/DrawerLayout',
  component: DrawerLayout,
  decorators: [
    withInfo(info)
  ]
}

export const drawerLayout = () => <DrawerLayout sidebarTitle='Some School' config={sidebarConfig} />
