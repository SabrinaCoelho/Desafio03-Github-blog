import { css } from "styled-components";

export const mixins = {
    titleL: css`
        font-size: 1.5rem;
        line-height: 130%;
        font-weight: bold;
        color: ${props => props.theme["base-title"]};
    `,
    textM: css`
        font-size: 1rem;
        line-height: 160%;
        font-weight: 400;
        color: ${props => props.theme["base-text"]};
    `
}