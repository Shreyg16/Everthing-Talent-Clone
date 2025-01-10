import React from 'react';
import Link from 'next/link';
import { FooterSection } from '../../Types/footer';

interface FooterLinksProps {
  section: FooterSection;
}

export const FooterLinks: React.FC<FooterLinksProps> = ({ section }) => (
  <div>
    <h2 className="mb-6 text-sm font-semibold uppercase text-white">{section.title}</h2>
    <ul className="text-gray-400">
      {section.links.map((link) => (
        <li key={link.name} className="mb-4">
          <Link href={link.href} className="hover:underline">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

