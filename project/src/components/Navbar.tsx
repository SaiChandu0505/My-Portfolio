import { Github, Linkedin, Code2 } from 'lucide-react';
import { Link } from './Link';

export function Navbar() {
  const navItems = [
    { href: '#about', label: 'About me' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/saikaligatla/', icon: Linkedin },
    { href: 'https://github.com/SaiChandu0505', icon: Github },
    { href: 'https://leetcode.com/thisischandusai/', icon: Code2 },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-bold">
          Sai Chandu Kaligatla
        </a>
        
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          
          <ul className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <link.icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}