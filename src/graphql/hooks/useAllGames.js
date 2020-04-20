import { useStaticQuery, graphql } from 'gatsby';

export const useAllGames = () => {
  const {
    allContentfulGame: { nodes: games },
  } = useStaticQuery(graphql`
    query getAllGames {
      allContentfulGame {
        nodes {
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
      }
    }
  `);

  return games;
};
