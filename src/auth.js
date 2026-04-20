const API_URL = 'http://localhost:3000';

// --- AUTH HELPERS ---
function getToken() {
  return localStorage.getItem('cm_token');
}

function getUser() {
  const user = localStorage.getItem('cm_user');
  return user ? JSON.parse(user) : null;
}

function saveAuth(token, user) {
  localStorage.setItem('cm_token', token);
  localStorage.setItem('cm_user', JSON.stringify(user));
}

function clearAuth() {
  localStorage.removeItem('cm_token');
  localStorage.removeItem('cm_user');
}

function isLoggedIn() {
  return !!getToken();
}

// --- UPDATE NAV ---
function updateNav() {
  const user = getUser();
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;

  // Remove existing auth links to avoid duplicates
  const existing = document.getElementById('authNavItem');
  if (existing) existing.remove();

  const li = document.createElement('li');
  li.id = 'authNavItem';

  if (user) {
    li.innerHTML = `<a href="#" class="nav-link" id="logoutBtn">Logout (${user.name})</a>`;
    navLinks.appendChild(li);
    document.getElementById('logoutBtn').addEventListener('click', (e) => {
      e.preventDefault();
      clearAuth();
      window.location.href = 'index.html';
    });
  } else {
    li.innerHTML = `<a href="login.html" class="nav-link">Login</a>`;
    navLinks.appendChild(li);
  }
}

// --- LOGIN PAGE ---
const loginButton = document.getElementById('loginButton');
if (loginButton) {
  loginButton.addEventListener('click', async () => {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const errorBox = document.getElementById('authError');

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        errorBox.textContent = Array.isArray(data.message) ? data.message.join(', ') : data.message;
        return;
      }

      // Decode token to get user info
      const payload = JSON.parse(atob(data.token.split('.')[1]));
      saveAuth(data.token, { name: payload.name, email: payload.email, role: payload.role });
      window.location.href = 'index.html';

    } catch (err) {
      errorBox.textContent = 'Could not connect to server.';
    }
  });
}

// --- REGISTER PAGE ---
const registerButton = document.getElementById('registerButton');
if (registerButton) {
  registerButton.addEventListener('click', async () => {
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const errorBox = document.getElementById('authError');

    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        errorBox.textContent = Array.isArray(data.message) ? data.message.join(', ') : data.message;
        return;
      }

      window.location.href = 'login.html';

    } catch (err) {
      errorBox.textContent = 'Could not connect to server.';
    }
  });
}

// --- RUN ON EVERY PAGE ---
updateNav();