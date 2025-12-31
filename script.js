
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.innerText = "Light Mode";
    } else {
        toggleBtn.innerText = "Dark Mode";
    }
});



window.addEventListener("load", () => {
    alert("Welcome to Aman Kumar's Portfolio Website 🚀");
});



const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {
    skill.addEventListener("click", () => {
        skill.classList.toggle("active-skill");
    });
});


function showContact() {
    alert("Email: amankumar2k006@gmail.com\nPhone: 9241901848");
}
