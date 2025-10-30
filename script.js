// Elements
const joinBtn = document.getElementById("joinFreeBtn");
const joinNowBtns = document.querySelectorAll(".join-now");
const popup = document.getElementById("loginPopup");
const closePopup = document.getElementById("closePopup");
const loginForm = document.getElementById("loginForm");

// Show popup when clicking Join buttons
joinBtn.addEventListener("click", () => popup.classList.remove("hidden"));
joinNowBtns.forEach(btn => btn.addEventListener("click", () => popup.classList.remove("hidden")));

// Close popup
closePopup.addEventListener("click", () => popup.classList.add("hidden"));

// Handle login form
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful! Welcome to E-swash 🌿");
      popup.classList.add("hidden");
    } else {
      alert(data.message || "Invalid credentials");
    }
  } catch (err) {
    alert("Error connecting to server");
  }
});
