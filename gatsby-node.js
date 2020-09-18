const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

module.exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const blogListTemplate = path.resolve("./src/templates/blogList.js")
  const readingListTemplate = path.resolve("./src/templates/readingList.js")

  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulReadingPost {
        edges {
          node {
            article
          }
        }
      }
    }
  `)

  paginate({
    createPage,
    items: response.data.allContentfulBlogPost.edges,
    itemsPerPage: 5,
    pathPrefix: "/blog",
    component: blogListTemplate,
  })

  paginate({
    createPage,
    items: response.data.allContentfulReadingPost.edges,
    itemsPerPage: 5,
    pathPrefix: "/reading",
    component: readingListTemplate,
  })

  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
