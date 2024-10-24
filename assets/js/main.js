function validatePhoneNumber(input) {
  if (!input.value.startsWith("+966")) {
    input.value = "+966";
  }

  let phoneNumber = input.value.replace(/\D/g, "").replace(/^966/, "");

  let formattedNumber = "+966";

  if (phoneNumber.length > 0) {
    formattedNumber += " " + phoneNumber.substring(0, 2);
  }
  if (phoneNumber.length >= 3) {
    formattedNumber += " " + phoneNumber.substring(2, 5);
  }
  if (phoneNumber.length >= 6) {
    formattedNumber += " " + phoneNumber.substring(5, 9);
  }

  input.value = formattedNumber.slice(0, 16);
}

$(document).ready(function () {
  $(".select2").select2({
    placeholder: "اختر مدينتك",
    allowClear: true,
  });
});

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("DOMContentLoaded", (event) => {
  let activeLinkId = localStorage.getItem("activeLink");

  if (!activeLinkId) {
    activeLinkId = "register";
    localStorage.setItem("activeLink", activeLinkId);
    window.location.href = "register.html";
  }

  document.getElementById(activeLinkId).classList.add("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    localStorage.setItem("activeLink", this.id);
  });
});
