/** @jsx jsx */

import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Grid, Box, Flex } from './base-components';
import styled from '@emotion/styled';
import { color } from 'styled-system';
import Button from './button';
import { useAllFeaturedGames } from '../graphql/hooks';
import { css, jsx } from '@emotion/core';

const StyledFeaturedGallery = styled(Grid)`
  grid-area: featured;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: min-content;
  margin: 5rem 0;
`;

const StyledImageGallery = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1;
`;

const FeaturedGameContent = styled(Flex)({
  gridColumn: '2 / 3',
  gridRow: '1',
  zIndex: '2',
  margin: 0,
  color,
});

const ButtonStyle = css`
  align-self: baseline;
`;
FeaturedGameContent.Title = styled(Box)``;
FeaturedGameContent.Description = styled(Box)``;

const FeaturedGallery = () => {
  const featuredGames = useAllFeaturedGames();
  const [featuredGameIndex, setFeaturedGameIndex] = useState(0);
  const images = featuredGames.map((featuredGame) => ({
    srcSet: featuredGame.banner.fluid.srcSet,
    original: featuredGame.banner.fluid.src,
    originalAlt: featuredGame.title,
    thumbnailAlt: featuredGame.title,
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
      >
        <FeaturedGameContent.Title color="green" fontSize="2.7rem">
          {titleHebrew}
        </FeaturedGameContent.Title>
        <FeaturedGameContent.Description
          fontFamily="sans-serif"
          color="white"
          fontSize="2.7rem"
        >
          {subHeader}
        </FeaturedGameContent.Description>
        <Button css={ButtonStyle} bg="green" color="woodsmoke">
          שחקו עכשיו!
        </Button>
      </FeaturedGameContent>
    </StyledFeaturedGallery>
  );
};

export default FeaturedGallery;
