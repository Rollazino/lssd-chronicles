export const languages = ["cs", "sk", "en", "de"] as const;
export type Language = (typeof languages)[number];
