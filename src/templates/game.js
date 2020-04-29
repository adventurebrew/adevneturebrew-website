import React from 'react';
import { graphql } from 'gatsby';
import { Grid, Box } from '../components/base-components';
import styled from '@emotion/styled';
import GameHeader from '../components/game-header';
import TextContent from '../components/text-content';
import GameDetails from '../components/game-details';
import ImageCarousel from '../components/image-carousel';
import theme from '../theme';
import SEO from '../components/SEO';

import 'react-image-gallery/styles/css/image-gallery.css';

const Description = styled(TextContent)``;
const InstallationGuide = styled(TextContent)``;

const MainSection = styled(Grid)`
  margin-top: 3rem;
  grid-area: main;
  grid-row-gap: 5rem;
  grid-template-columns: minmax(3rem, 1fr) repeat(6, minmax(min-content, 15rem)) minmax(
      3rem,
      1fr
    );
  grid-template-rows: min-content 15rem repeat(2, min-content);
  grid-template-areas:
    '. game-header game-header game-header game-header game-header game-header .'
    'gallery gallery gallery gallery gallery gallery gallery gallery'
    '. description description description . game-details game-details .'
    '. installation installation installation . . . .';
  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    grid-template-columns: minmax(1rem, 1fr) minmax(20rem, 6fr) minmax(
        1rem,
        1fr
      );
    grid-template-rows: min-content 20rem repeat(3, minmax(min-content, 10rem));
    grid-template-areas:
      '. game-header .'
      'gallery gallery gallery'
      '. game-details .'
      '. description .'
      '. installation . ';
  }
  ${ImageCarousel} {
    grid-area: gallery;
  }
`;

const Game = ({ data: { contentfulGame } }) => {
  const {
    installationGuide,
    description,
    screenshots,
    thumbnails,
    titleHebrew,
  } = contentfulGame;

  return (
    <>
      <SEO title={titleHebrew} />
      <MainSection as="main">
        <GameHeader gridArea="game-header" game={contentfulGame} />
        {!!thumbnails && (
          <ImageCarousel screenshots={screenshots} thumbnails={thumbnails} />
        )}
        <Description
          as="section"
          gridArea="description"
          title="תקציר"
          text={description.childMarkdownRemark.html}
        />
        <Box gridColumn="1 / -1" bg="aztec" gridRow={['5', '5', '4']} />
        <InstallationGuide
          as="section"
          gridArea="installation"
          title="הוראות התקנה"
          text={installationGuide.childMarkdownRemark.html}
          my="3rem"
        />
        <GameDetails gridArea="game-details" game={contentfulGame} />
      </MainSection>
    </>
  );
};

export const pageQuery = graphql`
  query GameBySlug($slug: String!) {
    contentfulGame(slug: { eq: $slug }) {
      title
      titleHebrew
      sizeInKiloBytes
      getGameLink
      operatingSystem {
        osName
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      installationGuide {
        childMarkdownRemark {
          html
        }
      }
      releaseDate(formatString: "MMM, YYYY")
      gameDeveloper {
        name
      }
      gameBox {
        fluid(maxWidth: 400) {
          ...GatsbyContentfulFluid
        }
      }
      screenshots {
        fluid(maxWidth: 800) {
          src
        }
      }
      thumbnails: screenshots {
        fluid(maxWidth: 200) {
          src
        }
      }
    }
  }
`;

export default Game;
