import React from 'react'
import Checkbox from '../../../src/components/Atoms/Checkbox'
import { withInfo } from '@storybook/addon-info'

export default { title: 'Atoms/Checkbox', decorators: [withInfo] }

export const unCheckedCheckedBox = () => (
  <Checkbox
    name='This is an unchecked checkbox'
    onCheck={() => { window.alert('Working') }}
  />
)

export const checkedCheckBox = () => (
  <Checkbox
    name='This is a checked checkbox'
    initialChecked
    onCheck={() => { window.alert('Working') }}
  />
)
