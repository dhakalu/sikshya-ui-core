import styled from 'styled-components'
import Colors from '../../../utils/Color'
import Typography from '../../../utils/Typography'

export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 0.3rem;
    color: ${Colors.grey75};
    ${Typography.bold}
    ${Typography.defaultSize}
`
