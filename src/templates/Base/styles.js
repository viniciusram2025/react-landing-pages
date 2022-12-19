/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../../components/TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: 5.4rem;

    @media ${theme.media.lteMedium} {
      padding-top: 0;
    }
  `}
`;
