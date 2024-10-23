function validatePhoneNumber(input) {
  if (!input.value.startsWith("+966")) {
    input.value = "+966";
  }
  input.value = input.value.replace(/\D/g, "").replace(/^966/, "+966");

  if (input.value.length > 13) {
    input.value = input.value.slice(0, 13);
  }
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
