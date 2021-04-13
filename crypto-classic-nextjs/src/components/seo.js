import React from 'react';
import Head from 'next/head';

export default function Seo({
  description = 'Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!',
  author = 'RedQ, Inc.',
  meta,
  title = 'Startup Crypto Classic Landing',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
