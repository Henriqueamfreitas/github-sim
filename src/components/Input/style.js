import styled from "styled-components"

export const StyledInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    input, select, option {
        height: 3rem;
        border-radius: .25rem;
        border: solid 0.0625rem var(--color-grey2);
        background-color: var(--color-grey2);
        padding: 0rem 1rem;
        color: var(--color-grey0);
        font-family: "Inter", sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
`