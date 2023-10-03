import { Helmet } from 'react-helmet-async'
import { SeoHeadProps } from '../typing/props'

export const SEOHead = ({ title, description, rel, href }: SeoHeadProps) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel={rel} href={href} />
        </Helmet>
    )
}
