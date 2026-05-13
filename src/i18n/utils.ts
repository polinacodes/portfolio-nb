import { ui, languages } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return 'es'; // default
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof lang]) {
    return ui[lang][key] || ui['es'][key];
  };
}