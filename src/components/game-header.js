import React from 'react';
import { Grid, Box, gridProps } from './base-components';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Button from './button';
import Img from 'gatsby-image';
import ArrowCircleDown from 'emotion-icons/fa-solid/ArrowCircleDown';
import PropTypes from 'prop-types';
import theme from '../theme';
import { useAllComingSoonGames } from '../graphql/hooks';

const GameBox = styled(Img)`
  ${gridProps}
`;
const ActionButton = styled(Box)`
  text-decoration: none;
`.withComponent('a');

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
  const { titleHebrew, title, gameBox, getGameLink } = game;
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
      <ActionButton
        as="a"
        gridArea="action-button"
        rel="noopener"
        href={getGameLink}
        target="_blank"
        width={['20rem', '20rem', '100%']}
        justifySelf="center"
      >
        {!!getGameLink && (
          <Button
            bg="green"
            color="bunker"
            height="100%"
            icon={ArrowCircleDown}
          >
            לקניה
          </Button>
        )}
      </ActionButton>
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
