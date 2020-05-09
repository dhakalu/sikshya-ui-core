import styled from 'styled-components'
import Colors from '../../../utils/Color'

export const NAV_BAR_HEIGHT = '57px'
export const SIDE_BAR_WIDTH = '300px'

const SidebarWrapper = styled.div`
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
    position: fixed;
    left: 0;
    top: ${NAV_BAR_HEIGHT};
    width:${SIDE_BAR_WIDTH};
    height: 100vh;
    overflow: auto; 
    background: ${Colors.whiteF0};
    scrollbar-width: thin;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    &:hover {
        &::-webkit-scrollbar-thumb {
            background: #ddd;
        }
    }

    a {
        text-decoration: none;
        color: #333333;
    }

    h1 {
        padding: 0px 20px;
    }
`

export default SidebarWrapper
