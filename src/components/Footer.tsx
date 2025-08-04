import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import lssdBadge from "@/assets/lssd-badge.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Department Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={lssdBadge} alt="LSSD Badge" className="h-12 w-12" />
              <div>
                <h3 className="text-lg font-bold">LSSD</h3>
                <p className="text-sm opacity-90">Serving with Honor</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              The Los Santos Sheriff's Department is committed to providing professional 
              law enforcement services to protect and serve our community with integrity, 
              respect, and accountability.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/about" className="text-sm hover:text-accent transition-colors">About Us</a>
              <a href="/divisions" className="text-sm hover:text-accent transition-colors">Our Divisions</a>
              <a href="/recruitment" className="text-sm hover:text-accent transition-colors">Join LSSD</a>
              <a href="/community" className="text-sm hover:text-accent transition-colors">Community Programs</a>
              <a href="/contact" className="text-sm hover:text-accent transition-colors">Contact Us</a>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <div>
                  <p className="text-sm font-medium">Emergency: 911</p>
                  <p className="text-xs opacity-80">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <div>
                  <p className="text-sm">Non-Emergency: (555) 123-4567</p>
                  <p className="text-xs opacity-80">Mon-Fri 8AM-6PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <p className="text-sm">1200 Davis Avenue</p>
                  <p className="text-sm">Los Santos, SA 90210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Alerts */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <div className="text-sm space-y-2">
              <p className="font-medium">Community Alerts</p>
              <p className="text-xs opacity-80">
                Sign up for emergency notifications and community updates
              </p>
              <button className="text-accent hover:underline text-xs font-medium">
                Subscribe Now →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            © 2024 Los Santos Sheriff's Department. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-80 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm opacity-80 hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-sm opacity-80 hover:text-accent transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;