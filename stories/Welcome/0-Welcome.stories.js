import React from 'react'
import { linkTo } from '@storybook/addon-links'
import Releases from './Releases'
import { withInfo } from '@storybook/addon-info'

const info = {
  text: `
    # Welcome!

    Hi there! This is a component library.
  `
}

export default {
  title: 'Welcome',
  component: Releases,
  decorators: [
    withInfo(info)
  ]
}

export const AllReleases = () => <Releases showApp={linkTo('Button')} />
