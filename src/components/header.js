import styled from '@emotion/styled';
import Logo from './logo';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { typography } from 'styled-system';
import { Grid } from './base-components';
import theme from '../theme.js';
import gridProps from './base-components/grid-props';
const { breakpoints, colors } = theme;

const LinkedLogo = styled(Link)`
  ${gridProps}
  ${typography}
`;

const StyledGrid = styled(Grid)`
  grid-area: header;
  grid-template-columns:
    1fr minmax(max-content, 6fr) min-content minmax(max-content, 6fr)
    1fr;
  grid-template-areas: '. logo search-bar navigation .';
  padding: 2rem;
  @media only screen and (max-width: ${breakpoints[1]}) {
    grid-template-areas: '. logo logo logo .';
  }
`;

const NavigationStyle = css`
  align-self: center;
  grid-area: navigation;
  align-self: center;
  display: flex;
  justify-content: flex-end;
`;

const LinkStyle = styled(Link)({
  ':visited': {
    color: 'inherit',
  },
  marginLeft: '10px',
  color: colors.brightTurquoise,
  fontSize: '2.3rem',
});

const Header = () => (
  <StyledGrid as="header" gridGap="2rem">
    <LinkedLogo
      gridArea="logo"
      to="/"
      textDecoration="none"
      textAlign={['center', 'center', 'initial']}
    >
      <Logo />
    </LinkedLogo>
  </StyledGrid>
);

export default Header;
