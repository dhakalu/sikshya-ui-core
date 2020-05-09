/* eslint-env jest */
import React from 'react'
import { fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Sidebar from '../../../../src/components/Organism/Sidebar/Sidebar'
import SidebarOption from '../../../../src/components/Organism/Sidebar/SidebarOption'
import { renderWithRouter } from './utils'
import { sidebarConfig } from '../../../../src/data-stubs/sidebarConfig'

describe('Sidebar', () => {
  test('Sidebar shows the title passed as prop', () => {
    const { getByText } = renderWithRouter(
      <Sidebar title='Hello World!' />
    )
    const sidebarTitle = getByText(/Hello World!/i)
    expect(sidebarTitle).toBeInTheDocument()
  })

  test('Sidebar Option Renders the name passed as prop', () => {
    const { getByText } = renderWithRouter(
      <SidebarOption name='Option 1' />
    )
    const sidebarOption = getByText(/Option 1/)
    expect(sidebarOption).toBeInTheDocument()
  })

  test('Sidebar Option has button role', () => {
    const { getByRole } = renderWithRouter(
      <SidebarOption name='Option 1' />
    )
    const sidebarOption = getByRole('button')
    expect(sidebarOption).toBeInTheDocument()
  })

  test('Sidebar Option calls the function passed as onClick prop when option is clicked', () => {
    const functionToCallOnClick = jest.fn()
    const { getByRole } = renderWithRouter(
      <SidebarOption name='Option 1' onClick={functionToCallOnClick} />
    )
    const sidebarOption = getByRole('button')
    fireEvent.click(sidebarOption)
    expect(functionToCallOnClick).toHaveBeenCalledTimes(1)
  })

  test('Sidebar renders the children passed as prop when config is not passed', () => {
    const textToRender = 'This is comming from children'
    const { getByText } = renderWithRouter(
      <Sidebar
        children={<div>{textToRender}</div>}
        title='Hello World!'
      />
    )
    const sidebarTitle = getByText(textToRender)
    expect(sidebarTitle).toBeInTheDocument()
  })

  test('Sidebar ignores config passed as prop when children is passed', () => {
    const textToRender = 'This is comming from children'
    const { getByText } = renderWithRouter(
      <Sidebar
        children={<div>{textToRender}</div>}
        config={sidebarConfig}
        title='Hello World!'
      />
    )
    const sidebarTitle = getByText(textToRender)
    expect(sidebarTitle).toBeInTheDocument()
  })
})
