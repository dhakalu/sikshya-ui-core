import { css } from 'styled-components'
import Colors from './Color'

export default {
  grey10: css`
        border: 1px solid ${Colors.grey10}
    `,
  grey20: css`
        border: 1px solid ${Colors.grey20}
    `,
  grey30: css`
        border: 1px solid ${Colors.grey30}
    `,
  grey40: css`
        border: 1px solid ${Colors.grey40}
    `,
  grey50: css`
        border: 1px solid ${Colors.grey50}
    `,
  grey60: css`
        border: 1px solid ${Colors.grey60}
    `,
  grey70: css`
        border: 1px solid ${Colors.grey70}
    `,
  grey100: css`
        border: 1px solid ${Colors.grey100}
    `,
  noBorder: css`
        border: none;
    `,
  onlyTop: css`
        border-bottom: none;
        border-left: none;
        border-right: none;
    `,
  smallBorderRadius: css`
        border-radius: 3px;
    `,
  largeBorderRadius: css`
        border-radius: 20px;
    `,
  extraLargeBorderRadius: css`
        border-radius: 32px;
    `,
  circularBorderRadius: css`
        border-radius: 50%
    `
}
