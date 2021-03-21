import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const NewStaticQuery = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
          }
        } 
      }
    `
  )

  return site.siteMetadata.author
}

export default NewStaticQuery