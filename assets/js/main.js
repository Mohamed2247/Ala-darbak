document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    ar: {
      brandName: "النقل بإستخدام",
      about: "معلومات عننا",
      jobs: "الوظائف",
      help: "المساعدة",
      login: "تسجيل الدخول",
      register: "التسجيل",
      header: "أنقل أي بضائع على دربك",
      subheader: "اطلب سيارة واشحن ولا تقلق عليها",
      requestCar: "اطلب سيارة",
      chooseDestination: "اختار الوجهة",
      enterGoodsSize: "ادخل حجم البضائع",
      langToggle: "AR-EN",
      fullNameLabel: "الأسم كامل",
      fullNamePlaceholder: "الإسم كامل",
      passwordLabel: "كلمة السر",
      passwordPlaceholder: "كلمة السر",
      locationLabel: "البلد/المدينة",
      locationPlaceholder: "البلد/المدينة",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "أدخل رقم هاتفك",
      submitButton: "التسجيل",
      submitButton: "تسجيل الدخول",
      Logout: "تسجيل خروج",
      city: "اختر المدينة",
      selectCity: "اختر مدينتك",
      Riyadh: "الرياض",
      Jeddah: "جده",
      Dammam: "الدمام",
      Khobar: "الخبر",
      Mecca: "مكة",
      Medina: "المدينة",
      Abha: "أبها",
      Buraidah: "بريدة",
      Tabuk: "تابوك",
      Najran: "نجران",
      Hail: "حائل",
      Jizan: "جازان",
      Qassim: "القصيم",
      Ahsa: "الاحساء",
      Yanbu: "ينبع",
      Khamis: "خميس مشيط",
    },
    en: {
      brandName: "Transport With",
      about: "About Us",
      jobs: "Jobs",
      help: "Help",
      login: "Login",
      register: "Register",
      header: "Transport Any Goods Along Your Way",
      subheader: "Request a car, ship, and don’t worry about it",
      requestCar: "Request a Car",
      chooseDestination: "Choose Destination",
      enterGoodsSize: "Enter Goods Size",
      langToggle: "EN-AR",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "Full Name",
      passwordLabel: "Password",
      passwordPlaceholder: "Password",
      locationLabel: "Country/City",
      locationPlaceholder: "Country/City",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Phone Number",
      submitButton: "Register",
      submitButton: "login",
      Logout: "Logout",
      city: "Select City",
      selectCity: "selectCity",
      Riyadh: "Riyadh",
      Jeddah: "Jeddah",
      Dammam: "Dammam",
      Khobar: "Khobar",
      Mecca: "Mecca",
      Medina: "Medina",
      Abha: "Abha",
      Buraidah: "Buraidah",
      Tabuk: "Tabuk",
      Najran: "Najran",
      Hail: "Hail",
      Jizan: "Jizan",
      Qassim: "Qassim",
      Ahsa: "Ahsa",
      Yanbu: "Yanbu",
      Khamis: "Khamis Mushayt",
    },
  };

  let currentLang = "ar";

  function updateContent() {
    const brandTextElement = document.getElementById("brandText");
    const aboutElement = document.getElementById("about");
    const jobsElement = document.getElementById("jobs");
    const helpElement = document.getElementById("help");
    const loginElement = document.getElementById("login");
    const registerElement = document.getElementById("register");
    const headerElement = document.getElementById("header");
    const subheaderElement = document.getElementById("subheader");
    const requestCarElement = document.getElementById("requestCar");
    const chooseDestinationElement =
      document.getElementById("chooseDestination");
    const enterGoodsSizeElement = document.getElementById("enterGoodsSize");
    const langToggleElement = document.getElementById("langToggle");
    const fullNameLabelElement = document.getElementById("fullNameLabel");
    const fullNameInputElement = document.getElementById("fullName");
    const passwordLabelElement = document.getElementById("passwordLabel");
    const passwordInputElement = document.getElementById("password");
    const locationLabelElement = document.getElementById("locationLabel");
    const locationInputElement = document.getElementById("location");
    const phoneLabelElement = document.getElementById("phoneLabel");
    const phoneInputElement = document.getElementById("phone");
    const submitButtonElement = document.getElementById("submitButton");
    const LogoutElement = document.getElementById("Logout");
    const cityElement = document.getElementById("city");
    const selectCityElement = document.getElementById("selectCity");
    const RiyadhElement = document.getElementById("Riyadh");
    const JeddahElement = document.getElementById("Jeddah");
    const DammamElement = document.getElementById("Dammam");
    const KhobarElement = document.getElementById("Khobar");
    const MeccaElement = document.getElementById("Mecca");
    const MedinaElement = document.getElementById("Medina");
    const AbhaElement = document.getElementById("Abha");
    const BuraidahElement = document.getElementById("Buraidah");
    const TabukElement = document.getElementById("Tabuk");
    const NajranElement = document.getElementById("Najran");
    const HailElement = document.getElementById("Hail");
    const JizanElement = document.getElementById("Jizan");
    const QassimElement = document.getElementById("Qassim");
    const AhsaElement = document.getElementById("Ahsa");
    const YanbuElement = document.getElementById("Yanbu");
    const KhamisElement = document.getElementById("Khamis");
    if (brandTextElement)
      brandTextElement.textContent = translations[currentLang].brandName;
    if (aboutElement)
      aboutElement.textContent = translations[currentLang].about;
    if (jobsElement) jobsElement.textContent = translations[currentLang].jobs;
    if (helpElement) helpElement.textContent = translations[currentLang].help;
    if (loginElement)
      loginElement.textContent = translations[currentLang].login;
    if (registerElement)
      registerElement.textContent = translations[currentLang].register;
    if (headerElement)
      headerElement.textContent = translations[currentLang].header;
    if (subheaderElement)
      subheaderElement.textContent = translations[currentLang].subheader;
    if (requestCarElement)
      requestCarElement.textContent = translations[currentLang].requestCar;
    if (chooseDestinationElement)
      chooseDestinationElement.textContent =
        translations[currentLang].chooseDestination;
    if (enterGoodsSizeElement)
      enterGoodsSizeElement.textContent =
        translations[currentLang].enterGoodsSize;
    if (langToggleElement)
      langToggleElement.textContent = translations[currentLang].langToggle;
    if (fullNameLabelElement)
      fullNameLabelElement.textContent =
        translations[currentLang].fullNameLabel;
    if (fullNameInputElement)
      fullNameInputElement.placeholder =
        translations[currentLang].fullNamePlaceholder;

    if (passwordLabelElement)
      passwordLabelElement.textContent =
        translations[currentLang].passwordLabel;
    if (passwordInputElement)
      passwordInputElement.placeholder =
        translations[currentLang].passwordPlaceholder;

    if (locationLabelElement)
      locationLabelElement.textContent =
        translations[currentLang].locationLabel;
    if (locationInputElement)
      locationInputElement.placeholder =
        translations[currentLang].locationPlaceholder;

    if (phoneLabelElement)
      phoneLabelElement.textContent = translations[currentLang].phoneLabel;
    if (phoneInputElement)
      phoneInputElement.placeholder =
        translations[currentLang].phonePlaceholder;

    if (submitButtonElement)
      submitButtonElement.textContent = translations[currentLang].submitButton;
    if (LogoutElement)
      LogoutElement.textContent = translations[currentLang].Logout;
    if (cityElement) cityElement.textContent = translations[currentLang].city;
    if (selectCityElement)
      selectCityElement.textContent = translations[currentLang].selectCity;

    if (RiyadhElement)
      RiyadhElement.textContent = translations[currentLang].Riyadh;
    if (JeddahElement)
      JeddahElement.textContent = translations[currentLang].Jeddah;
    if (DammamElement)
      DammamElement.textContent = translations[currentLang].Dammam;
    if (KhobarElement)
      KhobarElement.textContent = translations[currentLang].Khobar;
    if (MeccaElement)
      MeccaElement.textContent = translations[currentLang].Mecca;
    if (MedinaElement)
      MedinaElement.textContent = translations[currentLang].Medina;
    if (AbhaElement) AbhaElement.textContent = translations[currentLang].Abha;
    if (BuraidahElement)
      BuraidahElement.textContent = translations[currentLang].Buraidah;
    if (TabukElement)
      TabukElement.textContent = translations[currentLang].Tabuk;
    if (NajranElement)
      NajranElement.textContent = translations[currentLang].Najran;
    if (HailElement) HailElement.textContent = translations[currentLang].Hail;
    if (JizanElement)
      JizanElement.textContent = translations[currentLang].Jizan;
    if (QassimElement)
      QassimElement.textContent = translations[currentLang].Qassim;
    if (AhsaElement) AhsaElement.textContent = translations[currentLang].Ahsa;
    if (YanbuElement)
      YanbuElement.textContent = translations[currentLang].Yanbu;
    if (KhamisElement)
      KhamisElement.textContent = translations[currentLang].Khamis;
  }

  const langToggleButton = document.getElementById("langToggle");
  if (langToggleButton) {
    langToggleButton.addEventListener("click", () => {
      currentLang = currentLang === "ar" ? "en" : "ar";
      updateContent();
    });
  }

  updateContent();
});
