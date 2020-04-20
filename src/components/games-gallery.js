import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { colors } from '../theme.js';
import { Grid, Box, Flex } from './base-components';
import { useAllGames } from '../graphql/hooks';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledImg = styled(Img)`
  position: relative;
  transition-property: transform box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  box-shadow: 0 0 5px ${colors.brightTurquoise};
  &:hover {
    transform: perspective(195px) rotateX(9deg) scale(1.03);
    box-shadow: 0 0 15px ${colors.brightTurquoise};
  }
`;

const Game = ({ game }) => {
  return (
    <StyledLink to={`/games/${game.slug}`} textDecoration="none">
      <StyledImg bg="bunker2" fluid={game.titleImage.fluid} />
      <Box mt="1.5rem" fontSize={3}>
        {game.titleHebrew}
      </Box>
    </StyledLink>
  );
};

const GamesGallery = () => {
  const games = useAllGames();
  return (
    <Flex as="section" flexDirection="column" gridArea="gallery" mx="10rem">
      <Flex flexDirection="row" justifyContent="space-between">
        <Box
          as="span"
          fontSize="3rem"
          fontFamily="sans-serif"
          color="white"
          className="title"
        >
          המשחקים
        </Box>
        <Box as="a" fontSize="2.3rem" href="/">
          רוצה עוד
        </Box>
      </Flex>
      <Grid
        mx="5rem"
        gridGap="3.5rem"
        gridTemplateColumns="repeat(auto-fit, minmax(36rem, 1fr))"
      >
        {games.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </Grid>
    </Flex>
  );
};

export default GamesGallery;
