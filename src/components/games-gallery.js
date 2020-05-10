import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { colors } from '../theme.js';
import { Grid, Box, Flex, defaultProps } from './base-components';

const StyledLink = styled(Link)`
  ${defaultProps}
`;

const StyledImg = styled(Img)`
  position: relative;
  transition-property: transform box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  background-color: black;
  box-shadow: 0 0 5px ${colors.brightTurquoise};
  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
    box-shadow: 0 0 15px ${colors.brightTurquoise};
  }
`;

const Game = ({ game }) => {
  return (
    <StyledLink to={`/games/${game.slug}`} textDecoration="none" px="5rem">
      <StyledImg fluid={game.titleImage.fluid} />
      <Box mt="3rem" fontSize={4}>
        {game.titleHebrew}
      </Box>
    </StyledLink>
  );
};

const GamesGallery = (props) => {
  const { title, games } = props;
  const shouldShowButton = () => games.length > 9;
  return (
    <Flex as="section" flexDirection="column" {...props}>
      <Flex flexDirection="row" justifyContent="space-between">
        <Box
          as="span"
          fontSize="3rem"
          mb="2rem"
          fontFamily="sans-serif"
          color="white"
          className="title"
        >
          {title}
        </Box>
        {shouldShowButton() && (
          <Box as="a" fontSize="2.3rem" href="/">
            רוצה עוד
          </Box>
        )}
      </Flex>
      <Grid
        gridGap="3rem"
        gridTemplateColumns="repeat(auto-fill, minmax(35rem, 1fr))"
      >
        {games.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </Grid>
    </Flex>
  );
};

export default GamesGallery;
