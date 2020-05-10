import styled from 'styled-components'
import Colors from '../../../utils/Color'

const CheckboxWrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;


  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: ${props => props.checked ? Colors.blue170 : Colors.white};
    border-style: solid;
    border-color: ${props => props.checked ? Colors.blue170 : Colors.grey30};
    &:after{

    }
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ span{
  background-color: ${props => props.checked ? Colors.blue170 : Colors.grey30}

  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ span {
  background-color: ${props => props.checked ? Colors.blue170 : Colors.white};
  border-color: ${props => props.checked ? Colors.blue170 : Colors.grey30};

  }

  /* Create the checkmark/indicator*/
  span:after {
  content: "";
  position: absolute;
  display: block;
  }

  /* Show the checkmark when checked */
  input:checked ~ span:after {
  display: block;
  }

  &:hover input:checked ~span{
    background-color: ${props => props.checked ? Colors.blue170 : Colors.grey30}
  }

  /* Style the checkmark/indicator */
  span:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid ${props => Colors.white};
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  }
`

export default CheckboxWrapper
