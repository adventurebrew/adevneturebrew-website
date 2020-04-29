import React from 'react';
import styled from '@emotion/styled';
import { Box, Grid } from '../components/base-components';
import { graphql } from 'gatsby';

const Main = styled(Grid)`
  margin-top: 3rem;
  grid-area: main;
  grid-row-gap: 5rem;
  grid-template-columns: minmax(3rem, 1fr) repeat(6, minmax(min-content, 15rem)) minmax(
      3rem,
      1fr
    );
  grid-template-rows: min-content 15rem repeat(2, min-content);
`;

const GameDev = ({ data: { contentfulGameDev } }) => {
  const { title, titleHebrew } = contentfulGameDev;
  return (
    <Main>
      <Box>{title}</Box>
      <Box>{titleHebrew}</Box>
    </Main>
  );
};

export const pageQuery = graphql`
  query GameDevBySlug($slug: String!) {
    contentfulGameDev(slug: { eq: $slug }) {
      title
      titleHebrew
      slug
    }
  }
`;

export default GameDev;
