const box = document.querySelector(".box");
const name = document.querySelector(".box input[placeholder='Name']");
const year = document.querySelector('.box input[placeholder="DOB"]');
const check = document.querySelector(".box button");
const title = document.querySelector("#title");
const image = document.querySelector("img");

check.addEventListener("click", () => {
  age = parseInt(year.value);
  age_check = new Date().getFullYear() - age;
  console.log(age_check);

  if (/^[a-zA-Z]{3,}$/.test(name.value) && age_check >= 0 && age_check <= 100) {
    if (age_check >= 18 && age_check < 50) {
      title.innerHTML = `<img src="https://imgs.search.brave.com/F-IkvMzRFXoyhlYvszG7Qmfe_sZmNjoIZ-ylK_TgRPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iZXN0/YW5pbWF0aW9ucy5j/b20vbWVkaWEvZmly/ZXdvcmtzMi8zNjcx/NzI4MjdyZWQtZ3Jl/ZW4tZmlyZXdvcmst/ZXhwbG9zaW9ucy5n/aWY.gif" /> <br>
       ${name.value}, you can get married and you are ${age_check} years old  `;
    } else {
      title.innerHTML = `
      <img src="https://i.pinimg.com/originals/d3/a9/d3/d3a9d3af4536574fda44ee647dc73fe7.gif" /> <br>
      ${name.value}, you're not eligible for marriage because you are ${age_check} years old`;
    }
  } else {
    title.innerHTML = `<span style="color:red";>ALL Fields Are Required</span>`;
  }
});
