/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.medium};
    `}
`;
