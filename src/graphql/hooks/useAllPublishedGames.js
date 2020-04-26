import { useStaticQuery, graphql } from 'gatsby';

export const useAllPublishedGames = () => {
  const { contentfulGameCollection } = useStaticQuery(graphql`
    query getPublishedGames {
      contentfulGameCollection(name: { eq: "Published Games" }) {
        name
        games {
          ...gameGalleryFields
        }
      }
    }
  `);
  return contentfulGameCollection.games;
};
