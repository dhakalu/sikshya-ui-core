import styled from 'styled-components'
import Colors from '../../utils/Color'

export default styled.div`
    position: relative;

    &.has-error {
        label, input {
            color: ${Colors.red130};
        }

        input {
            border: 1px solid ${Colors.red130};
            box-shadow: 0 0 0 1px ${Colors.red130};
            margin-bottom: 0.5em;
            &.focused {
                color: ${Colors.grey100};
            }
        }
    }

    &.disabled {
        label {
            color: ${Colors.grey50};
        }
    }

`
