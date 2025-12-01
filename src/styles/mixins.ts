import { css } from "styled-components";

export const mixins = {
    titleL: css`
        font-size: 1.5rem;
        line-height: 130%;
        font-weight: bold;
        color: ${props => props.theme["base-title"]};
    `,
    titleM: css`
        font-size: 1.25rem;
        line-height: 160%;
        font-weight: bold;
        color: ${props => props.theme["base-title"]};
    `,
    titleS: css`
        font-size: 1.125rem;
        line-height: 160%;
        font-weight: bold;
        color: ${props => props.theme["base-subtitle"]};
    `,
    textM: css`
        font-size: 1rem;
        line-height: 160%;
        font-weight: 400;
        color: ${props => props.theme["base-text"]};
    `,
    textS: css`
        font-size: .875rem;
        line-height: 160%;
        font-weight: 400;
        color: ${props => props.theme["base-span"]};
    `,
}