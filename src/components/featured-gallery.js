/** @jsx jsx */

import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Grid, Box, Flex } from './base-components';
import styled from '@emotion/styled';
import Button from './button';
import { useAllFeaturedGames } from '../graphql/hooks';
import { css, jsx } from '@emotion/core';
import theme from '../theme';
const { breakpoints } = theme;

const FeaturedGameContent = styled(Flex)`
  grid-column: 2 / 3;
  grid-row: 1;
  z-index: 2;
`;

const StyledFeaturedGallery = styled(Grid)`
  grid-area: featured;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: min-content;
  margin: 5rem 0;
  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    ${FeaturedGameContent} {
      display: none;
    }
  }
`;

const StyledImageGallery = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1;
`;

const ButtonStyle = css`
  align-self: baseline;
`;
const Title = styled(Box)``;
const Description = styled(Box)``;

const FeaturedGallery = () => {
  const featuredGames = useAllFeaturedGames();
  const [featuredGameIndex, setFeaturedGameIndex] = useState(0);
  const images = featuredGames.map((featuredGame) => ({
    srcSet: featuredGame.banner.fluid.srcSet,
    original: featuredGame.banner.fluid.src,
  }));
  const { titleHebrew, subHeader } = featuredGames[featuredGameIndex];
  return (
    <StyledFeaturedGallery as="section">
      <StyledImageGallery>
        <ImageGallery
          items={images}
          showBullets={true}
          showPlayButton={false}
          showThumbnails={false}
          showNav={false}
          showFullscreenButton={false}
          onSlide={(index) => setFeaturedGameIndex(index)}
        />
      </StyledImageGallery>
      <FeaturedGameContent
        flexDirection="column"
        bg="racingGreen70"
        alignItem="center"
        justifyContent="center"
        pr="5rem"
        m="0"
      >
        <Title color="green" fontSize="2.7rem">
          {titleHebrew}
        </Title>
        <Description fontFamily="sans-serif" color="white" fontSize="2.7rem">
          {subHeader}
        </Description>
        <Button css={ButtonStyle} bg="green" color="woodsmoke">
          שחקו עכשיו!
        </Button>
      </FeaturedGameContent>
    </StyledFeaturedGallery>
  );
};

export default FeaturedGallery;
