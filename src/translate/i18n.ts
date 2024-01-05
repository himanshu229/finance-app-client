import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en_error from "./message/en/errors/error.json";
import en_inform from "./message/en/informations/informations.json";
import en_label from "./message/en/labels/label.json";
import hi_error from "./message/hi/errors/error.json";
import hi_inform from "./message/hi/informations/informations.json";
import hi_label from "./message/hi/labels/label.json";
const resources = {
  en: {
    translation: {
      ...en_error,
      ...en_inform,
      ...en_label,
    },
  },
  hi: {
    translation: {
      ...hi_error,
      ...hi_inform,
      ...hi_label,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
