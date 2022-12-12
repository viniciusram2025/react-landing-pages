import * as Styled from './styles';
import P from 'prop-types';

// eslint-disable-next-line no-unused-vars
export const Dummy = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

Dummy.propTypes = {
  children: P.node.isRequired,
};
