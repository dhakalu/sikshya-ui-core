import React from 'react'
import { Colors } from '../../../src'

export default { title: 'Atoms/Colors' }

const getStyle = (key) => {
  return {
    width: 100,
    height: 100,
    borderRadius: 10,
    background: Colors[key]
  }
}

const getName = (canelcaseKey = '') => {
  return canelcaseKey.replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => { return str.toUpperCase() })
}

export const allColors = () => (
  <div>
    {
      Object.keys(Colors).map(key => {
        return (
          <div key={key} style={{ display: 'inline-block', margin: 10 }}>
            <div style={getStyle(key)} />
            <div>{getName(key)}</div>
            <div>{Colors[key]}</div>
            <div>{`Colors.${key}`}</div>
          </div>
        )
      })
    }
  </div>
)
