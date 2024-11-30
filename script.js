const birthday = document.getElementById("birthday");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

function calculateAge() {
  const birthdate = new Date(birthday.value);

  if (birthday.value === "") {
    result.innerText = "Invalid Birthdate";
    result.style.color = "red";
  }
  else {
    const age = getAge(birthday);
    result.innerText = "Your Age is " + age + " Year Old";
  }

  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthdate.getFullYear();
  const month = currentDate.getMonth() - birthdate.getMonth();

  if (month < 0 || (month === 0 && currentDate.getDate() < birthdate.getDate())) {
    age--;
  }
return age ;
}

btn.addEventListener('click', calculateAge);
