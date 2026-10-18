import { useEffect, useRef, useState } from "react";
import { languages } from "@/lib/languages";
import { useLocalization } from "@/lib/localization-context";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: new (
          options: { pageLanguage: string; autoDisplay: boolean },
          elementId: string,
        ) => unknown;
      };
    };
  }
}

let googleTranslateScript: Promise<void> | undefined;

function loadGoogleTranslate(): Promise<void> {
  if (window.google?.translate?.TranslateElement) return Promise.resolve();
  if (googleTranslateScript) return googleTranslateScript;

  googleTranslateScript = new Promise((resolve, reject) => {
    window.googleTranslateElementInit = () => resolve();
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onerror = () => {
      googleTranslateScript = undefined;
      reject(new Error("Google Translate se nepodařilo načíst."));
    };
    document.head.appendChild(script);
  });

  return googleTranslateScript;
}

const GoogleTranslateWidget = ({ id }: { id: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setLanguage } = useLocalization();
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let observer: MutationObserver | undefined;
    let attachedSelect: HTMLSelectElement | undefined;

    const handleLanguageChange = (event: Event) => {
      const selectedLanguage = languages.find(
        (language) => language === (event.currentTarget as HTMLSelectElement).value,
      );
      if (selectedLanguage) setLanguage(selectedLanguage);
    };

    loadGoogleTranslate()
      .then(() => {
        if (cancelled || !containerRef.current) return;

        const constructor = window.google?.translate?.TranslateElement;
        if (!constructor) {
          setLoadError(true);
          return;
        }

        new constructor({ pageLanguage: "cs", autoDisplay: false }, id);

        const bindLanguageSelect = () => {
          const select = containerRef.current?.querySelector<HTMLSelectElement>(".goog-te-combo");
          if (select && select !== attachedSelect) {
            attachedSelect?.removeEventListener("change", handleLanguageChange);
            attachedSelect = select;
            attachedSelect.addEventListener("change", handleLanguageChange);
          }
        };

        observer = new MutationObserver(bindLanguageSelect);
        observer.observe(containerRef.current, { childList: true, subtree: true });
        bindLanguageSelect();
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });

    return () => {
      cancelled = true;
      observer?.disconnect();
      attachedSelect?.removeEventListener("change", handleLanguageChange);
    };
  }, [id, setLanguage]);

  return (
    <div className="google-translate-control">
      <div
        ref={containerRef}
        id={id}
        className="google-translate-widget"
        aria-label="Google Translate"
      />
      {loadError && (
        <span role="status" className="text-xs text-destructive">
          Google Translate se nepodařilo načíst.
        </span>
      )}
    </div>
  );
};

export default GoogleTranslateWidget;
