/* eslint-env jest */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from '../../../../src/components/Atoms/Button'
import { BUTTON_TYPES } from '../../../../src/components/Atoms/Button/styles'
import '@testing-library/jest-dom/extend-expect'
import Colors from '../../../../src/utils/Color'

const doubled = jest.fn((number) => number * 2)

const buttonName = 'Click Me!'
describe('Button', () => {
  test('make sure the click event works', () => {
    const { getByText } = render(
      <Button
        name={buttonName}
        buttonType={BUTTON_TYPES.primary}
        onClick={doubled}
      />
    )
    const button = getByText(buttonName)
    fireEvent.click(button)
    expect(doubled).toHaveBeenCalledTimes(1)
  })

  test('Make sure clik on disbaled button does not work', () => {
    const { getByText } = render(
      <Button
        name={buttonName}
        buttonType={BUTTON_TYPES.primary}
        disabled
        onClick={doubled}
      />
    )
    const button = getByText(buttonName)
    fireEvent.click(button)
    expect(doubled).toHaveBeenCalledTimes(1)
  })

  test('Make sure the text is uppercase', () => {
    const { container } = render(
      <Button
        name={buttonName}
        buttonType={BUTTON_TYPES.primary}
        onClick={doubled}
      />
    )
    expect(container.firstChild).toHaveStyle('text-transform: uppercase')
  })

  test('Make sure color of primary button is correct.', () => {
    const { container } = render(
      <Button
        name={buttonName}
        buttonType={BUTTON_TYPES.primary}
        onClick={doubled}
      />
    )
    expect(container.firstChild).toHaveStyle(`color: ${Colors.black120}`)
    expect(container.firstChild).toHaveStyle(`background: ${Colors.blue100}`)
  })

  test('Make sure color of destroyed button is correct.', () => {
    const { container } = render(
      <Button
        name={buttonName}
        buttonType={BUTTON_TYPES.destroyed}
        onClick={doubled}
      />
    )
    expect(container.firstChild).toHaveStyle(`color: ${Colors.white}`)
    expect(container.firstChild).toHaveStyle(`background: ${Colors.red100}`)
  })

  test('Make sure color of diminished button is correct.', () => {
    const { container } = render(
      <Button
        name={buttonName}
        buttonType={BUTTON_TYPES.diminished}
        onClick={doubled}
      />
    )
    expect(container.firstChild).toHaveStyle(`color: ${Colors.blue130}`)
    expect(container.firstChild).toHaveStyle(`background: ${Colors.transparent}`)
  })

  test('Make sure color of secondary button is correct.', () => {
    const { container } = render(
      <Button
        name={buttonName}
        buttonType={BUTTON_TYPES.secondary}
        onClick={doubled}
      />
    )
    expect(container.firstChild).toHaveStyle(`color: ${Colors.white}`)
    expect(container.firstChild).toHaveStyle(`background: ${Colors.black100}`)
  })

  test('Make sure color of secondaryReverse button is correct.', () => {
    const { container } = render(
      <Button
        name={buttonName}
        buttonType={BUTTON_TYPES.secondaryReverse}
        onClick={doubled}
      />
    )
    expect(container.firstChild).toHaveStyle(`color: ${Colors.black100}`)
    expect(container.firstChild).toHaveStyle(`background: ${Colors.white}`)
  })
})
