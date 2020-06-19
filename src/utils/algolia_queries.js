const { array } = require("prop-types")

const postQuery = `
    {
        posts: allMarkdownRemark (
            sort: {fields: frontmatter___date, order: DESC}
            ) {
          edges {
            node {
              frontmatter {
                category
                date_timestamp: date
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
                title
                background
              }
              timeToRead
              objectID: id
              fields {
                slug
              }
              excerpt(pruneLength: 50000)
            }
          }
        }
    }
`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }))

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: "Posts",
    settings: {
      attributesToSnippet: ["exerpt:20"],
    },
  },
]

module.exports = queries
