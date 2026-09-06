
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
    const paypalUrl = 'https://www.paypal.com/ncp/payment/LL9YWPHL2DLK6';

    if (amount === 'Custom') {
      window.location.href = paypalUrl;
    } else {
      window.location.href = paypalUrl + '?amount=' + amount;
    }
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
