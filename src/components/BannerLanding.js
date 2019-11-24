import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import picFood from '../assets/images/food.jpg'
import picFoodBowls from '../assets/images/food-bowls.jpg'

export const BannerLanding = (props) => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
    <section id="banner" className="style2">
        <div className="inner">
            <div className="image">&nbsp;
                <Img
                    fluid={data.file.childImageSharp.fluid}
                    alt="Gatsby Docs are awesome"
                />
            </div>
        </div>
    </section>
    )
}

export default BannerLanding
