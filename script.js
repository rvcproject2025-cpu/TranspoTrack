// Simple mock login for GitHub Pages
const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

loginForm?.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if(username === 'admin' && password === 'admin'){
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'dashboard.html';
  } else {
    errorMsg.textContent = 'Invalid credentials';
  }
});

// Protect dashboard, booking, monitoring
if(window.location.pathname.includes('dashboard.html') || 
   window.location.pathname.includes('booking.html') || 
   window.location.pathname.includes('monitoring.html')) {
  if(localStorage.getItem('isLoggedIn') !== 'true'){
    window.location.href = 'index.html';
  }
}
