
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-amount]').forEach(button => {
  button.addEventListener('click', () => {
    const amount = button.dataset.amount;
    document.querySelector('#donation-message').textContent =
      `${amount} selected. Connect this section to your chosen donation platform to accept secure gifts.`;
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
