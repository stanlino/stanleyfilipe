import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import pt_br from "./pt_br.json";
import en_us from "./en_us.json";

export const resources = {
  pt: {
    translation: pt_br
  },
  en: {
    translation: en_us
  }
}

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // if you're using a language detector, do not define the lng option
  });