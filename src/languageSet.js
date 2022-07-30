
const languageSet = () => {

  const lang = localStorage.getItem('lang');

  if (lang) {
    localStorage.setItem('lang', lang);
    if (lang === 'ar') {
      document.body.dir = "rtl";
    }
  }
  else {

    // var userLanguage = window.navigator.userLanguage || window.navigator.language;

    // localStorage.setItem('lang', userLanguage);

    localStorage.setItem('lang', "en");
  }



  return;
}

export default languageSet;

