import { createContext, useContext } from "react";
import type { Language } from "./languages";
import type { TranslationKey } from "./localization";

export interface LocalizationContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

export const LocalizationContext = createContext<LocalizationContextValue | null>(null);

export function useLocalization() {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error("useLocalization must be used within a LocalizationProvider");
  }
  return context;
}
