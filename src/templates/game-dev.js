import React from 'react';
import styled from '@emotion/styled';
import { Box, Grid, Flex } from '../components/base-components';
import { graphql } from 'gatsby';
import TextContent from '../components/text-content';

const Main = styled(Flex)`
  margin-top: 3rem;
`;

const GameDev = ({ data: { contentfulGameDev } }) => {
  const { title, titleHebrew, technicalIssues } = contentfulGameDev;
  return (
    <Main
      flexDirection="column"
      gridArea="main"
      mx="auto"
      maxWidth="88rem"
      p="2rem"
    >
      <Box fontSize="4rem">{titleHebrew}</Box>
      <Box fontSize="2rem">{title}</Box>
      {technicalIssues.map(({ title, details }) => (
        <TextContent
          fontFamily="Open Sans Hebrew"
          title={title}
          text={details.childMarkdownRemark.html}
        />
      ))}
    </Main>
  );
};

export const pageQuery = graphql`
  query GameDevBySlug($slug: String!) {
    contentfulGameDev(slug: { eq: $slug }) {
      title
      titleHebrew
      slug
      technicalIssues {
        title
        details {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

export default GameDev;
