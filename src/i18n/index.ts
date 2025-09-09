export type Locale = 'es' | 'en';
export const SUPPORTED_LOCALES = ['es', 'en'] as const;

import { messages as es } from './es';
import { messages as en } from './en';

export type Messages = typeof es | typeof en;

export function normalizeLang(lang?: string): Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes((lang || '').toLowerCase())
    ? ((lang || 'es').toLowerCase() as Locale)
    : 'es';
}

export function getMessages(lang?: string): Messages {
  const l = normalizeLang(lang);
  return l === 'en' ? en : es;
}
