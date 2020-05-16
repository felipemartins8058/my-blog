import React from "react"
import { useStaticQuery, graphql } from gastby
import Img from "gatsby-image"

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage ( file relativePath: { eq: "profile-image.img"}) {
                    childImageSharp{
                        fixed(width: 60, height: 60){
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    )

    return <Img fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar