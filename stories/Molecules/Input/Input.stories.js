import React from 'react'
import Input from '../../../src/components/Molecules/Input'
import { withInfo } from '@storybook/addon-info'

export default { title: 'Molecules/Input', decorators: [withInfo] }

export const basicInput = () => <Input />

export const withLabel = () => <Input label='Hello Label' />

export const withError = () => <Input label='Hello Label' hasError />

export const withErrorMessage = () => <Input label='Hello Label' hasError errorMessage='Something went wrong' />
