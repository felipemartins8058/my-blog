import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
    slug="/slug/"
    background="blue"
    category="MIH"
    date="7/10/1999"
    timeToRead="Finnaly I made it..."
    title="Made In Heaven"
    description="I'm taking my ride with destiny. Willing to play my part. Living with painful memories!"
    />
  </Layout>
)

export default IndexPage
