
const languageSet = () => {

  const lang = localStorage.getItem('lang');

  if (lang) {
    localStorage.setItem('lang', lang);
    if (lang === 'ar') {
      document.body.dir = "rtl";
    }
  }
  else {

    let userLanguage = window.navigator.userLanguage || window.navigator.language;

    localStorage.setItem('lang', userLanguage);

    if (userLanguage === 'ar') {
      document.body.dir = "rtl";
    }

  }



  return;
}

export default languageSet;

