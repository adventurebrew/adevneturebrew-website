import React from 'react';
import Img from 'gatsby-image';

import styled from '@emotion/styled';
import { Box, Grid, Flex } from '../components/base-components';
import { graphql } from 'gatsby';
import theme from '../theme';
import TextContent from '../components/text-content';

const { colors } = theme;

const TechnicalIssues = styled(Box)``;
const Main = styled(Flex)`
  margin-top: 3rem;
  ${TechnicalIssues}:nth-of-type(2n+1) {
    background-color: ${colors.aztec};
  }
`;

const StyledImg = styled(Img)`
  min-width: 40rem;
  margin-top: 4rem;
`;

const GameDev = ({ data: { contentfulGameDev } }) => {
  const { title, titleHebrew, technicalIssues, titleImage } = contentfulGameDev;
  console.log(titleImage);

  return (
    <Main
      flexDirection="column"
      gridArea="main"
      mx="auto"
      alignItems="center"
      width="100%"
    >
      <Box fontSize="4rem">{titleHebrew}</Box>
      <Box fontSize="2rem">{title}</Box>
      <StyledImg fluid={titleImage.fluid} />
      {technicalIssues.map(({ title, details }) => (
        <TechnicalIssues width="100%" mt="5rem">
          <TextContent
            p="4rem"
            fontFamily="Open Sans Hebrew"
            title={title}
            as="article"
            fontSize="2rem"
            text={details.childMarkdownRemark.html}
          />
        </TechnicalIssues>
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
      titleImage {
        fluid(maxWidth: 480, maxHeight: 300, resizingBehavior: PAD) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
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
