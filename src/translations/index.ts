import { translations as es } from './es';
import { translations as en } from './en';
import cvEs from '../../cv.json';
import cvEn from '../../cv.en.json';

export const translations = {
  es,
  en
} as const;

export type Cv = typeof cvEs;

export function getCv(locale: Locale = 'es'): Cv {
  return locale === 'en' ? cvEn : cvEs;
}

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof es;

export function getTranslations(locale: Locale = 'es') {
  return translations[locale] || translations.es;
}


export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = getTranslations(locale);
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}
