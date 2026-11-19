const root = document.documentElement;
const toggle = document.getElementById('themeToggle');

toggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('safeband-theme', next);
});

const saved = localStorage.getItem('safeband-theme');
if (saved) root.dataset.theme = saved;

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('interestForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formMessage').textContent =
    'Thanks — this is a front-end demo. Connect a secure mailing-list service before accepting real registrations.';
  e.target.reset();
});
