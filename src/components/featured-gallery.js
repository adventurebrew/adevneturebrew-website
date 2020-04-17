/** @jsx jsx */

import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Grid, Box, Flex } from './base-components';
import Button from './button';
import { useAllFeaturedGames } from '../graphql/hooks';
import { jsx } from '@emotion/core';

const FeaturedGallery = () => {
  const featuredGames = useAllFeaturedGames();
  const [featuredGameIndex, setFeaturedGameIndex] = useState(0);
  const images = featuredGames.map((featuredGame) => ({
    srcSet: featuredGame.banner.fluid.srcSet,
    original: featuredGame.banner.fluid.src,
  }));
  const { titleHebrew, subHeader } = featuredGames[featuredGameIndex];
  return (
    <Grid
      as="section"
      gridArea="featured"
      gridTemplateColumns="2fr 1fr"
      gridTemplateRows="min-content"
      mx="5rem"
    >
      <Box gridColumn="1 / span 2" gridRow="1">
        <ImageGallery
          items={images}
          showBullets={true}
          showPlayButton={false}
          showThumbnails={false}
          showNav={false}
          showFullscreenButton={false}
          onSlide={(index) => setFeaturedGameIndex(index)}
        />
      </Box>
      <Flex
        flexDirection="column"
        bg="racingGreen70"
        alignItem="center"
        justifyContent="center"
        pr="5rem"
        m="0"
        gridColumn="2 / 3"
        gridRow="1"
        zIndex="overlay"
        display={['none', 'none', 'flex']}
      >
        <Box color="green" fontSize="2.7rem">
          {titleHebrew}
        </Box>
        <Box fontFamily="sans-serif" color="white" fontSize="2.7rem">
          {subHeader}
        </Box>
        <Button alignSelf="baseline" bg="green" color="woodsmoke">
          שחקו עכשיו!
        </Button>
      </Flex>
    </Grid>
  );
};

export default FeaturedGallery;
