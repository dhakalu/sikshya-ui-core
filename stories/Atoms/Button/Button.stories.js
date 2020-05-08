import React from 'react'
import Button from '../../../src/components/Atoms/Button'
import { BUTTON_TYPES } from '../../../src/components/Atoms/Button/styles'
import { withInfo } from '@storybook/addon-info'

export default { title: 'Atoms/Button', decorators: [withInfo] }

export const basicButton = () => (
  <Button
    onClick={() => window.alert('Clicked')}
    name='Click Me!'
  />
)

export const destroyedButton = () => (
  <Button
    onClick={() => window.alert('Clicked')}

    buttonType={BUTTON_TYPES.destroyed}
    name='Click Me!'
  />
)

export const diminishedButton = () => (
  <Button
    onClick={() => window.alert('Clicked')}
    buttonType={BUTTON_TYPES.diminished}
    name='Click Me!'
  />
)

export const primaryButton = () => (
  <Button
    onClick={() => window.alert('Clicked')}

    buttonType={BUTTON_TYPES.primary}
    name='Click Me!'
  />
)

export const secondaryButton = () => (
  <Button
    onClick={() => window.alert('Clicked')}
    buttonType={BUTTON_TYPES.secondary}
    name='Click Me!'
  />
)

export const secondaryReverseButton = () => (
  <Button
    onClick={() => window.alert('Clicked')}
    buttonType={BUTTON_TYPES.secondaryReverse}
    name='Click Me!'
  />
)

export const basicDisabledButton = () => (
  <Button
  disabled = {true}
  onClick={() => window.alert('This should not appear.')}
  name = 'Click Me!'/>
)

export const destroyedDisabledButton = () => (
  <Button
  disabled = {true}
  onClick={() => window.alert('This should not appear.')}
  buttonType = {BUTTON_TYPES.destroyed}
  name = 'Click Me!'/>
)

export const diminishedDisabledButton = () => (
  <Button
  disabled = {true}
  onClick={() => window.alert('This should not appear.')}
  buttonType = {BUTTON_TYPES.diminished}
  name = 'Click Me!'/>
)

export const primaryDisabledButton = () => (
  <Button
  disabled = {true}
  onClick={() => window.alert('This should not appear.')}
  buttonType = {BUTTON_TYPES.primary}
  name = 'Click Me!'/>
)

export const secondaryDisabledButton = () => (
  <Button
  disabled = {true}
  onClick = {() => window.alert('This should not appear.')}
  buttonType = {BUTTON_TYPES.secondary}
  name = 'Click Me!'/>
)

export const secondaryReverseDisabledButton = () => (
  <Button
  disabled = {true}
  onClick = {() => window.alert('This should not appear.')}
  buttonType = {BUTTON_TYPES.secondaryReverse}
  name = 'Click Me!'/>
)
