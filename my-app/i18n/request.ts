import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/const/locale';

export default getRequestConfig(async () => {
  const store = await cookies();

  const cookieLocale = store.get('NEXT_LOCALE')?.value

  const preferred = cookieLocale || DEFAULT_LOCALE

  const locale = SUPPORTED_LOCALES.includes(preferred) ? preferred : DEFAULT_LOCALE
 
  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default
  };
});