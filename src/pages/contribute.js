import React from 'react';
import GamesGallery from '../components/games-gallery';
import styled from '@emotion/styled';
import { Box, Grid } from '../components/base-components';
import { useAllDevGames } from '../graphql/hooks/useAllDevGames';

const Main = styled(Grid)`
  grid-area: main;
  grid-row-gap: 5rem;
  grid-template-columns:
    minmax(2rem, 1fr) repeat(8, minmax(min-content, 20rem))
    minmax(2rem, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-template-areas: '. gallery  gallery gallery gallery gallery gallery gallery gallery .';
`;

const Contribute = () => {
  const games = useAllDevGames();
  return (
    <Main>
      <GamesGallery
        games={games}
        gridArea="gallery"
        title="עיזרו לנו להשלים את התרגום של המשחקים הבאים"
      />
    </Main>
  );
};

export default Contribute;
