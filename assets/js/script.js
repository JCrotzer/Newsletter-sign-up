const form = document.getElementById("form");
const mainContainer = document.getElementById("main-container");
const formResponse = document.getElementById("contact-form-response");
const submitBtn = document.getElementById("submit");
const dismissBtn = document.getElementById("reset-button");
const errorMsg = document.getElementById("error");
const confirmEmail = document.getElementById("email-response");
const emailInput = document.getElementById("email");

function handleSubmit(e) {
  e.preventDefault();
  console.log("submitted");

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  let isValid = true;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailPattern.test(data.email)) {
    isValid = false;
    errorMsg.style.display = "block";
    emailInput.style.borderColor = "hsl(340, 94%, 51%)";
    emailInput.style.background = "hsl(340, 75.80%, 87.10%)";
  }
  if (isValid) {
    mainContainer.style.display = "none";
    formResponse.style.display = "flex";
    confirmEmail.textContent = `${data.email}`;
  }
}

form.addEventListener("submit", handleSubmit);
dismissBtn.addEventListener("click", function () {
  mainContainer.style.display = "flex";
  formResponse.style.display = "none";
  errorMsg.style.display = "none";
  emailInput.value = "";
});
