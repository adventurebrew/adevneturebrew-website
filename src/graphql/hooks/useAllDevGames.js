import { useStaticQuery, graphql } from 'gatsby';

export const useAllDevGames = () => {
  const { allContentfulGameDev } = useStaticQuery(graphql`
    query getGameUnderDev {
      allContentfulGameDev {
        nodes {
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
  return allContentfulGameDev.nodes;
};
