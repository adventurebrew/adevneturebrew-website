import { graphql } from 'gatsby';

export const gameGalleryFields = graphql`
  fragment gameGalleryFields on ContentfulGame {
    id
    title
    titleHebrew
    slug
    titleImage {
      fluid(maxWidth: 480, maxHeight: 300, resizingBehavior: PAD) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`;
