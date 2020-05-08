import styled from 'styled-components'
import Borders from '../../../utils/Borders'
import Colors from '../../../utils/Color'

const inputSizes = {
  small: 20,
  medium: 32,
  large: 40
}

export default styled.input`
    display: block;
    width: calc(100% - 4px);
    height: ${props => `${(inputSizes[props.size] || 32)}px`};
    padding: 0 8px;
    ${Borders.grey50};
    padding-right: ${props => (props.paddingRight || 0)}px;
    ${Borders.smallBorderRadius}
    box-shadow: inset 0 2px 2px 0 rgba(155, 161, 169, 0.25);
    color: ${Colors.grey100};
    background-color: ${Colors.white};
    outline: none;
    &:hover {
        ${Borders.grey70}
    }
    &:focus {
        ${Borders.grey100}
    }
    &&::placeholder {
        color: ${Colors.grey50}
        opacity: 1
    }

    &&:disabled {
        color: ${Colors.grey75}
        background-color: ${Colors.grey10}
        ${Borders.grey30}
    }
`
