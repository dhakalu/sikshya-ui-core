
import styled, { css } from 'styled-components'
import Colors from '../../../utils/Color'

const cellPadding = css`padding: 0.625em 0.8em`

const StyledTableWrapper = styled.table`
    width: 100%;
    border-collspse: separate;
    border-spacing: 0;
    position: relative;

    thead {

    }

    th {
        position: relative;
        height: 34px;
        text-align: left;
        ${cellPadding};
    }

    tbody tr:not(:first-child) {

        &:nth-child(:even) {
            color: ${Colors.grey5}
        }

        color: #202124;
        box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);

        &:hover {
            box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
             0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
        }

        &.clickable:hover {
                cursor: pointer;
            }
        }
    }

    tbody td {
        ${cellPadding};
    }
`

export default StyledTableWrapper
