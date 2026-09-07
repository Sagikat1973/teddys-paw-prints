
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
const paypal50 = 'https://www.paypal.com/ncp/payment/B2KB77JAAGDPY';
    const paypal100 = 'https://www.paypal.com/ncp/payment/G36QQTBFA5ENA';
   if (amount === 'Custom') {
  window.location.href = paypalUrl;
} else if (amount === '$50') {
  window.location.href = paypal50;
     } else if (amount === '$100') {
  window.location.href = paypal100;
} else {
  window.location.href = paypalUrl + '?amount=' + amount;
}
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
