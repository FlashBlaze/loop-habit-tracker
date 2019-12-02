module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Loop - Habit Tracker`,
        short_name: `Loop - Habit Tracker`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `static/icon.png`,
      },
    },
  ],
  pathPrefix: '/loop-habit-tracker',
};
