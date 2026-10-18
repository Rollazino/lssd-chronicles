import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLocalization } from "@/lib/localization-context";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLocalization();

  useEffect(() => {
    console.error(
      "404 Error: Uživatel se pokusil přistoupit na neexistující stránku:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">{t("pageNotFound")}</p>
        <a href="/" className="text-primary hover:opacity-80 underline">
          {t("backHome")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
