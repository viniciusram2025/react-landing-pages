import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);

  const headingContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;

  //duas formas de fazer o mesmo teste
  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });
  //expect(headingContainer).toHaveStyleRule('background', 'red');

  expect(headingContainer).toMatchSnapshot();
});
