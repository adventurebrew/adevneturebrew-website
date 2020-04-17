import { Box, Flex } from './base-components';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import { useRef, useState } from 'react';
import ChevronLeft from 'emotion-icons/feather/ChevronLeft';
import ChevronRight from 'emotion-icons/feather/ChevronRight';
import ImageGallery from 'react-image-gallery';
import Modal from './modal';
import createGalleryObject from '../utils/get-gllery-object';

const THUMBNAILS_OFFSET_SEGMENT_IN_PX = 270;
const IMAGE_LINK =
  'https://images.ctfassets.net/sk2a8dj5kyra/3ko22T23zCTEGXAyOnLvdK/00765fdd77d2ba8928f744822f743575/66459520_10214422022893490_4737296997038424064_n.jpg?w=800&q=50';

const StyledImageGallery = styled(Box)`
  height: 100%;
`;
const ThumbnailList = styled(Box)`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: scroll;
  transform: scroll(calc(var(--i, 0) / var(--n) * -100%));
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ThumbnailsStyle = css`
  height: 100%;
`;

const SytledImage = css`
  height: 100%;
  width: 300px;
  margin: 0 10px;
  object-fit: cover;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.25s ease-in-out;
`;

const ImageCarousel = (props) => {
  const { thumbnails, screenshots } = props;
  const galleryImages = createGalleryObject({ thumbnails, screenshots });
  const thumbnailListEl = useRef(null);
  const imageGalleryEl = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setImageIndex] = useState(0);
  const scrollThunbnails = (offset) => {
    thumbnailListEl.current.scrollLeft += offset;
  };
  const scrollThunbnailsRight = () =>
    scrollThunbnails(-THUMBNAILS_OFFSET_SEGMENT_IN_PX);
  const scrollThunbnailsLeft = () =>
    scrollThunbnails(THUMBNAILS_OFFSET_SEGMENT_IN_PX);
  const openModalWithImage = (imageIndex) => {
    setImageIndex(imageIndex);
    setModalOpen(true);
  };
  return (
    <StyledImageGallery {...props}>
      <Flex
        css={css`
          height: 100%;
        `}
      >
        <ChevronRight size={200} onClick={scrollThunbnailsLeft} />
        <ThumbnailList ref={thumbnailListEl}>
          {thumbnails.map((thumbnail, index) => (
            <img
              css={SytledImage}
              onClick={() => openModalWithImage(index)}
              key={index}
              src={thumbnail.fluid.src}
            />
          ))}
        </ThumbnailList>
        <ChevronLeft size={200} onClick={scrollThunbnailsRight} />
      </Flex>
      {isModalOpen && (
        <Modal callback={() => setModalOpen(false)}>
          <ImageGallery
            ref={imageGalleryEl}
            items={galleryImages}
            showBullets={false}
            showPlayButton={false}
            showThumbnails={false}
            showNav={true}
            startIndex={currentImageIndex}
            showFullscreenButton={false}
          />
        </Modal>
      )}
    </StyledImageGallery>
  );
};

export default styled(ImageCarousel)();
