
export interface ContactProps {
  name: string;
  email: string;
  message: string;
  website?: boolean;
  seo?: boolean;
  webApp?: boolean;
  mvp?: boolean;
}

export interface SeoHeadProps {
    title: string
    description: string
    rel: string
    href: string
}

export interface HeroSectionProps {
  title: string;
  paragraph:Element;
  item?: string;
}