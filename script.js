function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const message = document.getElementById("message").value;
  const status = document.getElementById("status").checked;

  // const formData = {
  //   name: name,
  //   email: email,
  //   city: city,
  //   zipCode: zipCode,
  //   message: message,
  //   status: status,
  // };

  return { name, email, city, zipCode, message, status };
}

function isNumber(inputString) {
  const cleanedInput = inputString.replace(/\s/g, "").replace(/,/g, "");
  return !isNaN(cleanedInput);
}

function checkboxIsChecked() {
  const statusCheckbox = document.getElementById("status");
  return statusCheckbox.checked;
}

function validateFormData(formData) {
  if (formData === null) {
    return false;
  }

  if (isNaN(formData.zipCode)) {
    return false;
  }

  const statusCheckbox = document.getElementById("status");
  if (!statusCheckbox || !statusCheckbox.checked) {
    return false;
  }

  return true;
}

function submit() {
  const formData = handleGetFormData();
  const isValidate = validateFormData(formData);
  const warningDiv = document.getElementById("warning");
  warningDiv.textContent = "";
  if (!isValidate) {
    warningDiv.textContent = "Periksa form anda sekali lagi";
  } else {
    warningDiv.textContent = "";
  }
}
document.getElementById("submit-form").addEventListener("click", (event) => {
  event.preventDefault();
  submit();
});
