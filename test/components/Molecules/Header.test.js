/* eslint-env jest */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../../../src/components/Molecules/Header'

describe('Header', () => {
  test('Header shows h1 tag with passed title', () => {
    const { getByText } = render(
      <Header title='Hello World!' />
    )
    const linkElement = getByText(/Hello World!/i)
    expect(linkElement).toBeInTheDocument()
  })
})
