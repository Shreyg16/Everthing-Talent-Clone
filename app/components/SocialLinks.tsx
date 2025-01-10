import React from 'react';
import { SocialLink } from '../Types/footer';

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => (
  <div className="flex items-center space-x-6">
    {links.map((link) => (
      <a
        key={link.name}
        className="text-white hover:text-gray-500 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Follow us on ${link.name}`}
        href={link.href}
      >
        <link.icon className="w-6 h-6" aria-hidden="true" />
      </a>
    ))}
  </div>
);

