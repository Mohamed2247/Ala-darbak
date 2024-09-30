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
  },
};

let currentLang = "ar";

function updateContent() {
  document.getElementById("brandText").textContent =
    translations[currentLang].brandName;

  document.getElementById("about").textContent =
    translations[currentLang].about;
  document.getElementById("jobs").textContent = translations[currentLang].jobs;
  document.getElementById("help").textContent = translations[currentLang].help;
  document.getElementById("login").textContent =
    translations[currentLang].login;
  document.getElementById("register").textContent =
    translations[currentLang].register;
  document.getElementById("header").textContent =
    translations[currentLang].header;
  document.getElementById("subheader").textContent =
    translations[currentLang].subheader;
  document.getElementById("requestCar").textContent =
    translations[currentLang].requestCar;
  document.getElementById("chooseDestination").textContent =
    translations[currentLang].chooseDestination;
  document.getElementById("enterGoodsSize").textContent =
    translations[currentLang].enterGoodsSize;
  document.getElementById("langToggle").textContent =
    translations[currentLang].langToggle;
}

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  updateContent();
});

updateContent();

document.getElementById("langToggle").addEventListener("click", function () {
  const isArabic = document.body.classList.toggle("ar");
  document.body.classList.toggle("en", !isArabic);

  if (isArabic) {
    document.getElementById("fullName").placeholder = "الإسم كامل";
    document.getElementById("location").placeholder = "البلد/المدينة";
    document.getElementById("phone").placeholder = "رقم الهاتف";
  } else {
    document.getElementById("fullName").placeholder = "Full Name";
    document.getElementById("location").placeholder = "Country/City";
    document.getElementById("phone").placeholder = "Phone Number";
  }
});
