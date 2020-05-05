import styled from 'styled-components'
import Colors from '../../utils/Color'

import Typography from '../../utils/Typography'
export const BUTTON_TYPES = {
  destroyed: 'destroyed',
  diminished: 'diminished',
  primary: 'primary',
  secondaryReverse: 'secondaryReverse',
  secondary: 'secondary'
}

const backgrounColors = {
  [BUTTON_TYPES.destroyed]: Colors.red100,
  [BUTTON_TYPES.diminished]: Colors.transparent,
  [BUTTON_TYPES.primary]: Colors.blue100,
  [BUTTON_TYPES.secondary]: 'rgb(55, 71, 79)',
  [BUTTON_TYPES.secondaryReverse]: Colors.transparent
}

const textColors = {
  [BUTTON_TYPES.destroyed]: Colors.white,
  [BUTTON_TYPES.diminished]: Colors.blue130,
  [BUTTON_TYPES.primary]: 'rgb(15, 15, 89)',
  [BUTTON_TYPES.secondary]: Colors.white,
  [BUTTON_TYPES.secondaryReverse]: 'rgb(55, 71, 79)'
}

const StyledButton = styled.button`
    height: 34px;
    color: ${props => textColors[props.buttonType] || Colors.defaultButtonText};
    border-color: ${Colors.transparent};
    ${Typography.paddingHorizontal};
    ${Typography.uppercase};
    ${Typography.bold};
    letter-spacing: 0.05em;
    border-radius: 5px;
    background: ${props => backgrounColors[props.buttonType] || Colors.defaultButtonBackground};
    cursor: pointer;
    ${props => props.buttonType === BUTTON_TYPES.secondaryReverse && `border: 1.5px solid ${Colors.defaultButtonText}`};
    &:focus {
        outline: none;
    }
`

export default StyledButton
