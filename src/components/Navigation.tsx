import { useState } from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";

function ScrollToTopNavLink({ onClick, ...props }: NavLinkProps) {
  return (
    <NavLink
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) window.scrollTo({ top: 0, behavior: "auto" });
      }}
    />
  );
}
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AlertTriangle, Languages, Menu, Moon, Sun } from "lucide-react";
import lssdBadge from "@/assets/lssd-logo.png";
import { isSeptemberRemembrancePeriod } from "@/lib/remembrance";
import { useTheme } from "next-themes";
import { useLocalization } from "@/lib/localization-context";
import GoogleTranslateWidget from "@/components/GoogleTranslateWidget";

const PreferencesControls = ({ id }: { id: string }) => {
  const { t } = useLocalization();
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <div className="flex items-center gap-2">
      <Languages className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      <GoogleTranslateWidget id={id} />
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(nextTheme)}
        aria-label={theme === "dark" ? t("lightMode") : t("darkMode")}
        title={`${t("theme")}: ${theme === "dark" ? t("lightMode") : t("darkMode")}`}
      >
        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </div>
  );
};

const Navigation = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const showRemembranceLink = isSeptemberRemembrancePeriod();
  const { t } = useLocalization();

  const navItems = [
    { to: "/", label: t("home") },
    { to: "/about", label: t("about") },
    { to: "/command", label: t("command") },
    { to: "/divisions", label: t("divisions") },
    { to: "/media", label: t("media") },
    { to: "/recruitment", label: t("careers") },
    //{ to: "/community", label: "Komunita" },
    { to: "/contact", label: t("contact") },
    { to: "/endofwatch", label: t("endOfWatch") },
    ...(showRemembranceLink ? [{ to: "/11-zari", label: "9/11" }] : []),
  ];

  const NavContent = () => (
    <>
      {navItems.map((item) => (
        <ScrollToTopNavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
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
    <nav
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 professional-shadow ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex min-h-16 items-center justify-between gap-2 py-2">
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
          <div className="hidden xl:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <span className="font-semibold text-destructive">{t("emergency")}</span>
            </div>
          </div>

          <div className="shrink-0">
            <PreferencesControls id="desktop-site-language" />
          </div>

          {/* Mobile Menu */}
          <div className="shrink-0">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t("openNavigation")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-3 mb-6">
                  <img src={lssdBadge} alt="LSSD Badge" className="h-12 w-12" />
                  <div>
                    <SheetTitle className="text-lg font-bold text-primary">LSSD</SheetTitle>
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
                    <span className="font-semibold text-destructive">{t("emergency")}</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;