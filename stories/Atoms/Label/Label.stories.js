import React from 'react'
import Label from '../../../src/Atoms/Label'
import { withInfo } from '@storybook/addon-info'

export default { title: 'Atoms/Label', decorators: [withInfo] }

export const allProps = () => <Label label='Hello Label' />
