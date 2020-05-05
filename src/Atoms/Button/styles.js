import React from 'react'
import Button from '../../../src/Atoms/Button'
import { withInfo } from '@storybook/addon-info'

export default { title: 'Molecules/Input', decorators: [withInfo] }

export const basicButton = () => < Button / >