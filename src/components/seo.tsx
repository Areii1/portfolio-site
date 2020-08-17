import React from "react";
import { Helmet } from "react-helmet";

type Props = {
  description: string;
  lang: string;
  keywords: Array<string>;
  title: string;
};

function SEO(props: Props) {
  return (
    <Helmet
      htmlAttributes={{ lang: props.lang }}
      title={props.title}
      meta={[
        {
          name: `description`,
          content: props.description,
        },
        {
          property: `og:title`,
          content: props.title,
        },
        {
          property: `og:description`,
          content: props.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: 'keywords',
          content: props.keywords.join(', '),
        }
      ]}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
