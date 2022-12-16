/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../../components/TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    & > ${TextComponent} {
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`;
