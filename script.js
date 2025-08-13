// Initialize counter with stored date or default
let startDate = new Date(localStorage.getItem('incidentCounterStartDate') || "2025-07-06");

// Update counter display
function updateCounter() {
  const today = new Date();
  const daysElapsed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  document.getElementById("days-elapsed").innerHTML = 
    daysElapsed.toString().split('').map(d => `<span class="digit">${d}</span>`).join('');
}

// Password-protected reset
document.getElementById('reset-btn').addEventListener('click', function() {
  const password = prompt("Enter admin password to reset:");
  const correctPassword = "safety123"; // Change this to your password
  
  if (password === correctPassword) {
    if (confirm('⚠️ Reset counter to 0 days?')) {
      startDate = new Date();
      localStorage.setItem('incidentCounterStartDate', startDate);
      updateCounter();
      alert("Counter reset successful!");
    }
  } else if (password !== null) {
    alert("❌ Incorrect password");
  }
});

// Initial setup
updateCounter();
setInterval(updateCounter, 86400000); // Update daily
