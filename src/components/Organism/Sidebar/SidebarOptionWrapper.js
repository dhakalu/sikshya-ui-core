import styled from 'styled-components'
import Colors from '../../../utils/Color'
import Typography from '../../../utils/Typography'

const SidebarOptionWrapper = styled.div`
    padding: 10px 20px;
    letter-spacing: .05em;
    ${Typography.largeSize};
    font-size: 20px;
    &:hover {
        background: ${Colors.grey30};
        cursor: pointer;
    }
`

export default SidebarOptionWrapper
