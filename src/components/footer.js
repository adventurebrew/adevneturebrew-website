import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { Grid, Flex, Box } from './base-components';
import Logo from './logo';
import Button from './button';
import Icon from './icon';
import FacebookIcon from 'emotion-icons/fa-brands/Facebook';
import YoutubeIcon from 'emotion-icons/fa-brands/Youtube';
import GithubIcon from 'emotion-icons/fa-brands/Github';
import theme from '../theme';
import Heart from '../icons/Heart';

const FACEBOOK_PAGE = 'https://www.facebook.com/groups/200491360554968/';
const GITHUB = 'https://github.com/adventurebrew';
const YOUTUBE_PAGE = 'https://www.youtube.com/channel/UCKKV7KOyXuNYV7p1tblAEtg';
const currentYear = new Date().getFullYear();

const { breakpoints } = theme;
const LogoStyle = css`
  transform: rotate(4deg);
  user-select: none;
`;

const Copyrights = ({ className }) => (
  <Flex flexDirection="column" alignItems="flex-start" className={className}>
    <Logo css={LogoStyle} mb="3rem" />
    <Flex className="icons" mb="3rem">
      <a rel="noopener" href={FACEBOOK_PAGE} target="_blank">
        <Icon>
          <FacebookIcon size="3rem" />
        </Icon>
      </a>
      <a rel="noopener" href={YOUTUBE_PAGE} target="_blank">
        <Icon>
          <YoutubeIcon size="3rem" />
        </Icon>
      </a>
      <a rel="noopener" href={GITHUB} target="_blank">
        <Icon>
          <GithubIcon size="3rem" />
        </Icon>
      </a>
    </Flex>
    <Box color="brightTurquoise" opacity="0.6">
      כל הזכיות שמורות להרפתקה בעברית © {currentYear}
    </Box>
  </Flex>
);

const StyledFooter = styled(Grid)`
  grid-area: footer;
  align-content: end;
  grid-template-columns: repeat(2, minmax(40rem, 1fr)) minmax(10rem, 25rem);
  grid-template-areas: 'copyrights .  contribute';
  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    grid-template-columns: minmax(40rem, 1fr);
    grid-template-areas: 'copyrights';
    justify-self: center;
  }
  .copyrights {
    grid-area: copyrights;
    .icon {
      margin-left: 2rem;
    }
  }
`;

const contributeStyle = css`
  flex-direction: column;
  svg {
    height: 6rem;
    width: 6rem;
  }
  ${Box} {
    font-family: sans-serif;
    font-weight: 700;
    line-height: 3rem;
    flex: 1;
  }
  a {
    text-decoration: none;
  }
  button {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0) 100%,
      rgba(255, 255, 255, 0.36) 0%
    );
  }
`;
const Contribute = () => (
  <Flex css={contributeStyle} gridArea="contribute">
    <Heart />
    <Box my="2rem" fontSize="2.4rem" color="frenchRose">
      עזרו לנו לתרגם משחקי רטרו למען עתיד ילדנו
    </Box>
    <Link to="/contribute">
      <Button bg="frenchRose" fontSize="2.4rem" color="woodsmoke">
        אני רוצה לעזור
      </Button>
    </Link>
  </Flex>
);
const Footer = () => {
  return (
    <StyledFooter as="footer">
      <Copyrights className="copyrights" />
      <Contribute />
    </StyledFooter>
  );
};

export default Footer;
