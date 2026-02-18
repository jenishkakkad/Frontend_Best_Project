import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold mb-3 sm:mb-4">BEDIYA<sup className="text-[8px] sm:text-xs">®</sup></h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed px-4 sm:px-0">
              Refreshing every corner with superior airflow. India's leading consumer electricals brand.
            </p>
            <div className="flex gap-3 mt-4 sm:mt-6 justify-center sm:justify-start">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-secondary transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-secondary transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-secondary transition-colors" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-secondary transition-colors inline-block">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors inline-block">About Us</Link></li>
              <li><Link to="/media" className="hover:text-secondary transition-colors inline-block">Media</Link></li>
              <li><Link to="/career" className="hover:text-secondary transition-colors inline-block">Career</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors inline-block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-secondary transition-colors inline-block">Fans</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors inline-block">Appliances</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors inline-block">Heaters</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors inline-block">Lights</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex gap-2 justify-center sm:justify-start">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="text-left">Silver Consumer Electricals Ltd., Rajkot, Gujarat, India</span>
              </li>
              <li className="flex gap-2 justify-center sm:justify-start">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>+91 XXX XXX XXXX</span>
              </li>
              <li className="flex gap-2 justify-center sm:justify-start">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>info@bediya.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 border-t border-primary-foreground/10 text-center text-xs sm:text-sm text-primary-foreground/50 px-4">
          © {new Date().getFullYear()} Bediya. All rights reserved. | Silver Consumer Electricals Limited
        </div>
      </div>
    </footer>
  );
};

export default Footer;
