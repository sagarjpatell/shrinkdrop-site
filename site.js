const menuButton = document.querySelector('.menu-toggle')
const siteNav = document.querySelector('.site-nav')

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!isOpen))
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu')
  siteNav?.classList.toggle('is-open', !isOpen)
})

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false')
    menuButton?.setAttribute('aria-label', 'Open menu')
    siteNav.classList.remove('is-open')
  })
})

const year = document.querySelector('#year')
if (year) year.textContent = String(new Date().getFullYear())
