import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import { es, en } from '../assets';

const locales = RNLocalize.getLocales();
const defaultLocale = locales.length ? locales[0].languageTag : 'es-US';

i18n.translations = {
  en,
  es
};

i18n.locale = defaultLocale;
i18n.fallbacks = true;

export default i18n;
