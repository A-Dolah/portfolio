module.exports = {
  siteMetadata: {
    title: "Adam Dolah's Web Page",
    author: "Adam Dolah",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
  ],
}
