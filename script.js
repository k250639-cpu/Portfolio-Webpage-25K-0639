const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) greeting.textContent = "Good Morning, Muhammad Mohib!";
else if (hour < 18) greeting.textContent = "Good Afternoon, Muhammad Mohib!";
else greeting.textContent = "Good Evening, Muhammad Mohib!";

window.addEventListener("scroll", () => {
  const skills = document.querySelectorAll(".progress");
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      skill.style.width = skill.getAttribute("data-level") + "%";
    }
  });
});

function toggleProject(id) {
  const proj = document.getElementById("proj" + id);
  proj.style.display = proj.style.display === "block" ? "none" : "block";
}

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
  e.target.reset();
});
