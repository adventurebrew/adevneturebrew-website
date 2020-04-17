import React from 'react';
import { Grid, Box } from './base-components';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Button from './button';
import Img from 'gatsby-image';
import ArrowCircleDown from 'emotion-icons/fa-solid/ArrowCircleDown';
import PropTypes from 'prop-types';

const HebrewTitle = styled(Box)``;
const EnglishTitle = styled(Box)``;
const DevelopingCompany = styled(Box)``;
const GameBox = styled(Img)``;

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
  ${GameBox} {
    grid-area: box-image;
  }
  ${HebrewTitle} {
    grid-area: hebrew-title;
  }
  ${EnglishTitle} {
    grid-area: english-title;
  }
  ${DevelopingCompany} {
    grid-area: company;
  }
  ${Button} {
    grid-area: action-button;
    width: 100%;
  }
`;

const GameHeader = styled(({ game, ...rest }) => {
  const { titleHebrew, title, gameBox, getGameLink } = game;
  return (
    <Grid as="section" {...rest}>
      <GameBox fluid={gameBox.fluid} />
      <HebrewTitle color="white" fontSize="3.5rem">
        {titleHebrew}
      </HebrewTitle>
      <EnglishTitle fontSize="2rem" fontFamily="ariel" color="alto">
        {title}
      </EnglishTitle>
      <Button
        className="action-button"
        bg="green"
        color="bunker"
        icon={ArrowCircleDown}
      >
        <a rel="noopener" href={getGameLink} target="_blank">
          לקניה
        </a>
      </Button>
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
