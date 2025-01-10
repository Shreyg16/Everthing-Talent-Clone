export interface SocialLink {
    name: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }
  
  export interface FooterLink {
    name: string;
    href: string;
  }
  
  export interface FooterSection {
    title: string;
    links: FooterLink[];
  }
  
  