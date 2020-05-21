import React from 'react';
import { Grid, Box, gridProps, Link, Flex } from './base-components';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Button from './button';

import Img from 'gatsby-image';
import ArrowCircleDown from 'emotion-icons/fa-solid/ArrowCircleDown';
import PropTypes from 'prop-types';
import theme from '../theme';

const GameBox = styled(Img)`
  ${gridProps}
`;

const ActionButton = styled(Link)``;
const ActionButtons = styled(Flex)`
  grid-area: action-button;
  ${ActionButton} {
    margin-top: 1rem;
    text-decoration: none;
    justify-self: center;
  }
`;

const GameHeaderStyle = css`
  grid-area: game-header;
  grid-column-gap: 2rem;
  grid-template-columns: minmax(min-content, 30rem) minmax(min-content, 30rem);
  grid-template-rows: repeat(3, min-content) 1fr minmax(min-content, 6rem);
  grid-template-areas:
    'box-image hebrew-title'
    'box-image english-title'
    'box-image company'
    'box-image .'
    'box-image action-button';

  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    justify-content: center;
    grid-template-columns: minmax(min-content, 1fr);
    grid-template-rows: repeat(6, minmax(min-content, 6rem));
    grid-template-areas:
      'box-image '
      'box-image '
      'box-image '
      'hebrew-title '
      'english-title '
      'action-button ';
  }
`;

const GameHeader = styled(({ game, ...rest }) => {
  const { titleHebrew, title, gameBox, links } = game;
  return (
    <Grid as="section" {...rest} justifyContent="center">
      <GameBox gridArea="box-image" fluid={gameBox.fluid} />
      <Box
        gridArea="hebrew-title"
        color="white"
        fontSize="3.5rem"
        textAlign={['center', 'center', 'initial']}
      >
        {titleHebrew}
      </Box>
      <Box
        gridArea="english-title"
        fontSize="2rem"
        fontFamily="ariel"
        color="alto"
        textAlign={['center', 'center', 'initial']}
      >
        {title}
      </Box>
      <ActionButtons gridArea="action-button" flexDirection="column">
        {links.map(({ url, name }, index) => (
          <ActionButton
            key={index}
            href={url}
            width={['20rem', '20rem', '100%']}
          >
            <Button
              bg="green"
              color="bunker"
              height="100%"
              icon={ArrowCircleDown}
            >
              {name}
            </Button>
          </ActionButton>
        ))}
      </ActionButtons>
    </Grid>
  );
})(GameHeaderStyle);

GameHeader.propTypes = {
  game: PropTypes.shape({
    gameBox: PropTypes.object,
    titleHebrew: PropTypes.string,
    title: PropTypes.string,
    getGameLink: PropTypes.string,
  }),
};
export default GameHeader;
