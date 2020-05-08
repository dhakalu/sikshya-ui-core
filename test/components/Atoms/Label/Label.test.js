/* eslint-env jest */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Label from '../../../../src/components/Atoms/Label'

describe('Make sure Label renders as expected', () => {
  test('Table cell renders properly', () => {
    const { getByText } = render(<Label label='Upendra Dhakal' />)
    const linkElement = getByText(/Upendra Dhakal/i)
    expect(linkElement).toBeInTheDocument()
  })
})
