import React from 'react'
import { Helmet } from 'react-helmet-async';

interface SeoHeadProps {
  title: string
  description: string;
  rel: string;
  href: string;
}

export const SEOHead = ( { title, description, rel, href }: SeoHeadProps) => {
  return (
    <Helmet>
      <title>
        {title}
      </title>
      <meta name="description" content={ description } />
      <link rel={ rel } href={href} />
    </Helmet>
  )
}
