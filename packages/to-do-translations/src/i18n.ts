import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import en from './en';
import pt from './pt';
import es from './es';

const resources = {
    en,
    pt,
    es
};

i18n

    .use(RNLanguageDetector)

    .use(initReactI18next)

    .init({
        compatibilityJSON: 'v3',
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, /* Desactivar el escapeValue puede ser peligroso, pues posibilita el hecho de recibir un ataque XSS attacks */
        },
        resources
    });

export default i18n;
