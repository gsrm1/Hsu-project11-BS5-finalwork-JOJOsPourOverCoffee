// darkMode
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
const aLinks = document.querySelectorAll('a')
const navBarIndex = document.querySelectorAll('nav .index')
const navBarwhyDrinkCoffee = document.querySelector('nav .whyDrinkCoffee')
const navBarknowledge = document.querySelector('nav .knowledge')
const navBarDIY = document.querySelector('nav .DIY')
const navBarPurchase = document.querySelector('nav .purchase')

document.addEventListener('DOMContentLoaded', () => {
  const savedClickedLink = localStorage.getItem('navBarActive')
  if (savedClickedLink === 'index') {
    navBarIndex.forEach(item => item.classList.add('active'))
  } else if (savedClickedLink === 'whyDrinkCoffee') {
    navBarwhyDrinkCoffee.classList.add('active')
  } else if (savedClickedLink === 'knowledge') {
    navBarknowledge.classList.add('active')
  } else if (savedClickedLink === 'DIY') {
    navBarDIY.classList.add('active')
  } else if (savedClickedLink === 'purchase') {
    navBarPurchase.classList.add('active')
  }
  console.log(localStorage)
})

aLinks.forEach(function (item) {
  item.addEventListener('click', function (e) {
    if (item.getAttribute('href') === 'index.html') {
      localStorage.setItem('navBarActive', 'index')
    } else if (item.getAttribute('href') === 'whyDrinkCoffee.html') {
      localStorage.setItem('navBarActive', 'whyDrinkCoffee')
    } else if (item.getAttribute('href') === 'knowledge.html') {
      localStorage.setItem('navBarActive', 'knowledge')
    } else if (item.getAttribute('href') === 'DIY.html') {
      localStorage.setItem('navBarActive', 'DIY')
    } else if (item.getAttribute('href') === 'purchase.html') {
      localStorage.setItem('navBarActive', 'purchase')
    }

  })
})
