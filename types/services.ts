export interface ServiceLink {
  label: string;
  url: string;
}

export interface ServiceGroup {
  slug: string;
  title: string;
  description: string;
  services: ServiceLink[];
  markdownFile: string;
}
