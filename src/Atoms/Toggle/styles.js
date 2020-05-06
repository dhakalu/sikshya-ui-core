import styled from 'styled-components'
import Colors from '../../utils/Color'

const width = {
  large: 60,
  medium: 45,
  small: 30
}

const height = {
  large: 34,
  medium: 24,
  small: 17
}

const boderRadius = {
  large: 26,
  medium: 19,
  small: 10
}

const margins = {
  large: 4,
  medium: 2
}

const ToggleWrapper = styled.label`
    position: relative;
    display: inline-block;
    width: ${props => width[props.size]}px;
    height: ${props => height[props.size]}px;
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        position: absolute;
        cursor: pointer;
        border-radius: ${props => boderRadius[props.size]}px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${props => props.checked ? Colors.blue170 : Colors.grey30};
        -webkit-transition: .4s;
        transition: .4s;
        &::before {
            position: absolute;
            content: "";
            height: ${props => boderRadius[props.size]}px;
            width: ${props => boderRadius[props.size]}px;
            left: 4px;
            bottom: 4px;
            top: ${props => margins[props.size]}px;
            border-radius: 50%;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;


            
            -webkit-transform: translateX(${props => props.checked ? boderRadius[props.size] : 0}px);
            -ms-transform: translateX(${props => props.checked ? boderRadius[props.size] : 0}px);
            transform: translateX(${props => props.checked ? boderRadius[props.size] : 0}px);
        }
    }

`

export default ToggleWrapper
