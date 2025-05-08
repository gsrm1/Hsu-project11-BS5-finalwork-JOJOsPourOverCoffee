//darkMode
const html = document.querySelector('html');
const darkModeBtn = document.querySelector('#darkMode_switch');

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    darkModeBtn.textContent = 'lightMode';
    html.classList.add('darkMode');
  } else {
    html.classList.remove('darkMode');
    darkModeBtn.textContent = 'darkMode';
  }
});

darkModeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const isDark = html.classList.toggle('darkMode');
  if (isDark) {
    localStorage.setItem('theme', 'dark');
    darkModeBtn.textContent = 'lightMode';
  } else {
    localStorage.setItem('theme', 'light');
    darkModeBtn.textContent = 'darkMode';
  }
});

// navbarToggleActive
const locationUrl = location.pathname
const paginationIndex = document.querySelector('nav .index')
const paginationWhyDrinkCoffee = document.querySelector('nav .whyDrinkCoffee')
const paginationKnowledge = document.querySelector('nav .knowledge')
const paginationDIY = document.querySelector('nav .DIY')
const paginationPurchase = document.querySelector('nav .purchase')

document.addEventListener('DOMContentLoaded', () => {
  if (locationUrl === '/index.html') {
    paginationIndex.classList.add('active')
  } else if (locationUrl === '/whyDrinkCoffee.html') {
    paginationWhyDrinkCoffee.classList.add('active')
  } else if (locationUrl === '/knowledge.html') {
    paginationKnowledge.classList.add('active')
  } else if (locationUrl === '/purchase.html') {
    paginationPurchase.classList.add('active')
  } else if (locationUrl === '/DIY.html' || '/DIYdetail-1.html') {
    paginationDIY.classList.add('active')
  }
})
