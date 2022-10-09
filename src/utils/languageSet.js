
const languageSet = () => {

  let lang = localStorage.getItem('lang');

  if (lang) {

    localStorage.setItem('lang', lang);

    if (lang === 'ar') {

      document.title = 'منصة أخصائي البناء';

      document.body.dir = 'rtl';

    }
    else if (lang === 'en') {
      document.title = 'Construction Specialist Platform';

      document.body.dir = 'ltr';
    }
  }
  else {

    let userLanguage = window.navigator.userLanguage || window.navigator.language;

    if (userLanguage.includes('en')) {
      userLanguage = 'en';
    }
    else if (userLanguage.includes('ar')) {
      userLanguage = 'ar';
    }

    localStorage.setItem('lang', userLanguage);

    if (userLanguage === 'ar') {
      document.title = "منصة أخصائي البناء";

      document.body.dir = "rtl";
    }
    else if (userLanguage === "en") {
      document.title = "Construction Specialist Platform";

      document.body.dir = "ltr";

    }

  }

  return;
}

export default languageSet;

