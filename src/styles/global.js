import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
    :root{
        --color-grey5: ${({ theme }) => theme.colors.grey5};
        --color-grey4: ${({ theme }) => theme.colors.grey4};
        --color-grey3: ${({ theme }) => theme.colors.grey3};
        --color-grey2: ${({ theme }) => theme.colors.grey2};
        --color-grey1: ${({ theme }) => theme.colors.grey1};
        --color-grey0: ${({ theme }) => theme.colors.grey0};
        --color-grey: ${({ theme }) => theme.colors.grey};
        --color-primary: ${({ theme }) => theme.colors.primary};
        --color-primary-focus: ${({ theme }) => theme.colors.primaryFocus};
        --color-primary-negative: ${({ theme }) => theme.colors.primaryNegative};
        --color-success: ${({ theme }) => theme.colors.success};
        --color-negative: ${({ theme }) => theme.colors.negative};
    }
`