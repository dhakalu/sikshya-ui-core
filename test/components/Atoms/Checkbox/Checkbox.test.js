/* eslint-env jest */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Checkbox from '../../../../src/components/Atoms/Checkbox'

const doubled = jest.fn((number) => number * 2)
const name = 'This is a label'
describe('Checkbox', () => {
  test('Make sure the click event works while checking', () => {
    const { getByText } = render(
      <Checkbox
        name={name}
        onCheck={doubled}
      />
    )
    const checkBox = getByText(name)
    fireEvent.click(checkBox)
    expect(doubled).toHaveBeenCalledTimes(1)
  })

  test('Make sure click event works while unchecking', () => {
    const { getByText } = render(
      <Checkbox
        name={name}
        onCheck={doubled}
        initialChecked
      />
    )
    const checkBox = getByText(name)
    fireEvent.click(checkBox)
    expect(doubled).toHaveBeenCalledTimes(2)
  })
})
