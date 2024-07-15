export interface BioEntity {
  links: Links;
  published: string;
  summary: string;
  content: string;
}

export interface Links {
  link: Link;
}

export interface Link {
  '#text': string;
  rel: string;
  href: string;
}
