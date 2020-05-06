import Toggle from '../../../../src/Atoms/Toggle'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

export default { title: 'Atoms/Toggle', decorators: [withInfo] }

export const largeOn = () => (
  <Toggle size='large' initialChecked />
)

export const mediumToggle = () => (
  <Toggle size='medium' />
)

export const smallToggle = () => (
  <Toggle size='small' />
)
