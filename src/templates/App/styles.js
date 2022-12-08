import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => css`
        font-size: 20px;
        background: ${theme.colors.secondaryBg};
    `}
`;
