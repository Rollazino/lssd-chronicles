import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCallback } from "react";

function ScrollToTopNavLink(props: any) {
  const handleClick = useCallback((e: any) => {
    if (props.onClick) props.onClick(e);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [props]);
  return <NavLink {...props} onClick={handleClick} />;
}
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, AlertTriangle } from "lucide-react";
import lssdBadge from "@/assets/lssd-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Domů" },
    { to: "/about", label: "O nás" },
    { to: "/command", label: "Vedení" },
    { to: "/divisions", label: "Oddělení" },
    { to: "/media", label: "Média" },
    { to: "/recruitment", label: "Kariéra" },
    { to: "/endofwatch", label: "End of Watch" },
    // { to: "/community", label: "Komunita" },
    // { to: "/contact", label: "Kontakt" },
  ];

  const NavContent = () => (
    <>
      {navItems.map((item) => (
        <ScrollToTopNavLink
          key={item.to}
          to={item.to}
          className={({ isActive }: any) =>
            `px-4 py-2 rounded-md transition-colors font-medium ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-accent hover:text-accent-foreground"
            }`
          }
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </ScrollToTopNavLink>
      ))}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 professional-shadow">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Title */}
          <ScrollToTopNavLink to="/" className="flex items-center space-x-3">
            <img src={lssdBadge} alt="LSSD Badge" className="h-10 w-10 badge-glow" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary">LSSD</span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Los Santos Sheriff's Department
              </span>
            </div>
          </ScrollToTopNavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavContent />
          </div>

          {/* Emergency Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <span className="font-semibold text-destructive">Tísňová linka: 911</span>
            </div>
            {/*
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Neurgentní: (555) 123-4567</span>
            </div>
            */}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Otevřít navigaci</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-3 mb-6">
                  <img src={lssdBadge} alt="LSSD Badge" className="h-12 w-12" />
                  <div>
                    <h2 className="text-lg font-bold text-primary">LSSD</h2>
                    <p className="text-sm text-muted-foreground">
                      Los Santos Sheriff's Department
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <NavContent />
                </div>

                {/* Mobile Emergency Contacts */}
                <div className="border-t pt-4 mt-6 space-y-3">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span className="font-semibold text-destructive">Tísňová linka: 911</span>
                  </div>
                  {/*
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Neurgentní: (555) 123-4567</span>
                  </div>
                  */}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;