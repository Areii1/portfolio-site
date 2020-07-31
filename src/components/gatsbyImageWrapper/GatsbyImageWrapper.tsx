import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "./GatsbyImageWrapperStyles.css";

type Props = {
  type: string;
  className: string;
  alt: string;
};

const getQuery = (type: string) => {
  switch (type) {
    case "header": {
      return graphql`
        query {
          file(relativePath: { eq: "header.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `;
    }
    case "profile": {
      return graphql`
        query {
          file(relativePath: { eq: "profile.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `;
    }
    case "contact": {
      return graphql`
        query {
          file(relativePath: { eq: "contact.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `;
    }
  }
};

export const GatsbyImageWrapper = (props: Props) => {
  const imageQuery = getQuery(props.type);
  const imageQueryData = useStaticQuery(imageQuery);
  return (
    <Img
      fluid={imageQueryData.file.childImageSharp.fluid}
      className={props.className}
      alt={props.alt}
    />
  );
};
