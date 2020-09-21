require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Adam Dolah",
    thaiTitle: "อาดัม ดอเลาะ",
    author: "Adam Dolah",
    description: "Fullstack Web Developer",
    siteUrl: "https://www.adamdolah.com",
    keywords: [
      "web developer",
      "Adam Dolah",
      "Adam",
      "Dolah",
      "legal tech",
      "insurtech",
      "jurist",
      "juridik",
      "lawyer",
      "Sweden",
      "Stockholm",
      "Malmö",
      "Skåne",
      "fullstack",
      "full stack",
      "javascript",
      "React",
      "Node",
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        modalProps: {
          overlayClassName: `modalOverlay`,
          className: `modal`,
        },
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { sh: "bash", js: "javascript" },
              showLineNumbers: true,
            },
          },
        ],
      },
    },
  ],
}
