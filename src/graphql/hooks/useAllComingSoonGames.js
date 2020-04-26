import { useStaticQuery, graphql } from 'gatsby';

export const useAllComingSoonGames = () => {
  const { contentfulGameCollection } = useStaticQuery(graphql`
    query getComingSoonGames {
      contentfulGameCollection(name: { eq: "Coming Soon" }) {
        name
        games {
          ...gameGalleryFields
        }
      }
    }
  `);
  return contentfulGameCollection.games;
};
