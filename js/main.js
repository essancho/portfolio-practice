let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    let email = document.querySelectorAll(".email");
    email.forEach((item) => item.classList.toggle("dark-mode-email"));
    console.log(email);
    let links = document.querySelectorAll("a");
    links.forEach((item) => item.classList.toggle("dark-mode-link"));
});
