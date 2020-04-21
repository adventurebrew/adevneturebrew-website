import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import { Grid } from '../components/base-components';
import FeaturedGallery from '../components/featured-gallery';
import GamesGallery from '../components/games-gallery';
import SEO from '../components/SEO';
const Main = styled(Grid)`
  grid-area: main;
  grid-row-gap: 5rem;
  grid-template-columns:
    minmax(3rem, 1fr) repeat(8, minmax(min-content, 20rem))
    minmax(3rem, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-template-areas:
    'featured featured featured featured featured featured featured featured featured featured'
    '. gallery  gallery gallery gallery gallery gallery gallery gallery .';
`;

const RootIndex = () => (
  <Layout>
    <SEO />
    <Main mt="5rem" as="main">
      <FeaturedGallery />
      <GamesGallery />
    </Main>
  </Layout>
);

export default RootIndex;
