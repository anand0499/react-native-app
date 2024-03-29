import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    returnObjects:true,
    resources: {
      en: {
        translation: {
          greeting: "Hello, Welcome",
          name:'Name',
          placeHolder:'Enter you name',
          toggle_button_text: "Toggle Mode",
          text:'Please Click on One Language',
        },
      },
      hi: {
        translation: {
          greeting: "नमस्ते, स्वागत है",
          name:'नाम',
          placeHolder:'कृपया अपना पूरा नाम दर्ज करें',
          toggle_button_text: "मोड टॉगल करें",
          text:'कृपया एक भाषा पर क्लिक करें',
        }
      },
      fr: {
        translation: {
          greeting: "Bonjour bienvenue",
          name:'Nom',
          placeHolder:'Veuillez indiquer votre nom',
          toggle_button_text: "Basculer le mode",
          text:'Veuillez cliquer sur une langue'
        }
      }
    }
  });

export default i18next;
