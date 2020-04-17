import { useStaticQuery, graphql } from 'gatsby';

export const useAllFeaturedGames = () => {
  const {
    allContentfulFeaturedGames: { nodes },
  } = useStaticQuery(graphql`
    query allFeaturedGames {
      allContentfulFeaturedGames {
        nodes {
          featuredGames {
            titleHebrew
            subHeader
            slug
            banner {
              title
              fluid(
                maxHeight: 300
                maxWidth: 1000
                resizingBehavior: PAD
                background: "rgb:000000"
              ) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  return nodes[0].featuredGames;
};
