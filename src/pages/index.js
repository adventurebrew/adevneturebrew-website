import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import { Grid } from '../components/base-components';
import FeaturedGallery from '../components/featured-gallery';
import GamesGallery from '../components/games-gallery';
import { useAllPublishedGames, useAllComingSoonGames } from '../graphql/hooks';

import SEO from '../components/SEO';

const Main = styled(Grid)`
  grid-area: main;
  grid-row-gap: 5rem;
  grid-template-columns:
    minmax(2rem, 1fr) repeat(8, minmax(min-content, 20rem))
    minmax(2rem, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-template-areas:
    'featured featured featured featured featured featured featured featured featured featured'
    '. gallery  gallery gallery gallery gallery gallery gallery gallery .'
    '. coming-soon  coming-soon coming-soon coming-soon coming-soon coming-soon coming-soon coming-soon .';
`;

const RootIndex = () => {
  const publishedGames = useAllPublishedGames();
  const comingSoonGames = useAllComingSoonGames();

  return (
    <Layout>
      <SEO />
      <Main mt="5rem" as="main">
        <FeaturedGallery />
        <GamesGallery
          title="המשחקים"
          gridArea="gallery"
          games={publishedGames}
        />
        {comingSoonGames && (
          <GamesGallery
            title="בקרוב"
            gridArea="coming-soon"
            games={comingSoonGames}
          />
        )}
      </Main>
    </Layout>
  );
};
export default RootIndex;
