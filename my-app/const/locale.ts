import type { SelectOption } from "@/components/inputs/SelectInput";

export const SUPPORTED_LOCALES = ["en", "it", "es", "he"];

export const DEFAULT_LOCALE = "en";

export const CONTACT_LOCALE_COOKIE = "NEXT_LOCALE";

export const LOCALE_OPTIONS: SelectOption[] = [
  { value: "en", label: "English" },
  { value: "it", label: "Italiano" },
  { value: "es", label: "Español" },
  { value: "he", label: "עברית" },
];
