const Promise = require('bluebird');
const path = require('path');
const Game = path.resolve('./src/templates/game.js');
const GameDev = path.resolve('./src/templates/game-dev.js');

const ALL_GAMES_QUERY = `
      {
        allContentfulGame {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `;

const ALL_DEV_GAMES_QUERY = `
   {
        allContentfulGameDev {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `;

exports.createPages = async ({ graphql, actions }) => {
  const fetchData = async (query) => {
    const { errors, data } = await graphql(query);
    if (errors) {
      throw new Error('There was an error', errors);
    }
    return data;
  };

  const { createPage } = actions;
  const {
    allContentfulGame: { edges: games },
  } = await fetchData(ALL_GAMES_QUERY);
  const {
    allContentfulGameDev: { edges: gameDev },
  } = await fetchData(ALL_DEV_GAMES_QUERY);
  games.forEach((game) => {
    createPage({
      path: `/games/${game.node.slug}/`,
      component: Game,
      context: {
        slug: game.node.slug,
      },
    });
  });

  gameDev.forEach((game) => {
    createPage({
      path: `/games/${game.node.slug}/`,
      component: GameDev,
      context: {
        slug: game.node.slug,
      },
    });
  });
};
