import { Link } from 'react-router-dom';
import { Zap, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  browse: [
    { name: 'All Brands', path: '/browse' },
    { name: 'Super Sports', path: '/browse?category=Süper Spor' },
    { name: 'Luxury SUVs', path: '/browse?category=Lüks SUV' },
    { name: 'Electric Vehicles', path: '/browse?category=Elektrikli' },
  ],
  features: [
    { name: 'Car Comparison', path: '/compare' },
    { name: 'AI Consultant', path: '/ai' },
    { name: 'Technical Specs', path: '/browse' },
    { name: 'Price Guide', path: '/browse' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press', path: '/press' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-luxe section-padding">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Zap className="w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight">
                Luxe<span className="text-muted-foreground">Drive</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The future of automotive intelligence. Discover, compare, and explore 
              500+ premium vehicles with AI-powered insights.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-full glass-subtle hover:bg-white/10 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Browse */}
          <div>
            <h4 className="font-semibold mb-4">Browse</h4>
            <ul className="space-y-3">
              {footerLinks.browse.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-3">
              {footerLinks.features.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LuxeDrive. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with precision for automotive enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};
