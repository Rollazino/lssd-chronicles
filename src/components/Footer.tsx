import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
import lssdBadge from "@/assets/lssd-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informace o úřadu */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={lssdBadge} alt="LSSD Badge" className="h-12 w-12" />
              <div>
                <h3 className="text-lg font-bold">LSSD</h3>
                <p className="text-sm opacity-90">Služba se ctí</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Los Santos Sheriff's Department se zavazuje poskytovat profesionální policejní služby,
              chránit a sloužit naší komunitě s integritou, respektem a odpovědností.
            </p>
          </div>

          {/* Rychlé odkazy */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Rychlé odkazy</h4>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/about" className="text-sm hover:text-accent transition-colors">O nás</NavLink>
              <NavLink to="/divisions" className="text-sm hover:text-accent transition-colors">Oddělení</NavLink>
              <NavLink to="/recruitment" className="text-sm hover:text-accent transition-colors">Kariéra</NavLink>
              {/*
              <NavLink to="/community" className="text-sm hover:text-accent transition-colors">Komunitní programy</NavLink>
              */}
              <NavLink to="/contact" className="text-sm hover:text-accent transition-colors">Kontakt</NavLink>
            </nav>
          </div>

          {/* Kontaktní informace */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kontaktní informace</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <div>
                  <p className="text-sm font-medium">Tísňová linka: 911</p>
                  <p className="text-xs opacity-80">K dispozici 24/7</p>
                </div>
              </div>
              {/*
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <div>
                  <p className="text-sm">Neurgentní: (555) 123-4567</p>
                  <p className="text-xs opacity-80">Po–Pá 8:00–18:00</p>
                </div>
              </div>
              */}
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <p className="text-sm">Alhambra Drive</p>
                  <p className="text-sm">Sandy Shores, SA 3004</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <p className="text-sm">Innocence Boulevard</p>
                  <p className="text-sm">Los Santos, SA 9148</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <p className="text-sm">Paleto Boulevard</p>
                  <p className="text-sm">Paleto Bay, SA 1038</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sociální sítě & upozornění */}
          {/*
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Sledujte nás</h4>
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

            {/*
            <div className="text-sm space-y-2">
              <p className="font-medium">Komunitní upozornění</p>
              <p className="text-xs opacity-80">
                Přihlaste se k odběru tísňových oznámení a novinek z komunity
              </p>
              <button className="text-accent hover:underline text-xs font-medium">
                Přihlásit odběr →
              </button>
            </div>

          </div>
          */}
          
        </div>

        {/* Spodní lišta */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            © 2025 Los Santos Sheriff's Department. Všechna práva vyhrazena.
          </p>
          {/*
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-80 hover:text-accent transition-colors">Zásady ochrany osobních údajů</a>
            <a href="#" className="text-sm opacity-80 hover:text-accent transition-colors">Podmínky použití</a>
            <a href="#" className="text-sm opacity-80 hover:text-accent transition-colors">Přístupnost</a>
          </div>
          */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;