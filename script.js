/*Show Menu */
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/**Menu show */
/**Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/**Menu hidden */
/**Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}
/**Remove Menu mobile */

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')

  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/**Change background header */



/**Shadow header */
const shadowHeader = () => {
  const header = document.getElementById('header')

  this.scrollY >= 50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/**===Email Js===**/

const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  //serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_qzbcqhc', 'template_debuqai', '#contact-form', 'TB1ZmG7Ksqq58ECRV')
    .then(() => {
      //Show sent message
      contactMessage.textContent = 'Message sent successfully ✅'

      //Remove message after five seconds
      setTimeout(() => {
        contactMessage.textContent = ''
      }, 5000)

      //Clear input fields
      contactForm.reset()

    }, () => {
      //Show error message
      contactMessage.textContent = 'Message not sent (Service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)


/**Show scroll up */
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/**Scroll section active link */

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive)

/**Dark light theme */

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}
//Activate / Desactivate
themeButton.addEventListener('click', () => {
  //Add or Remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  //We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})



/**===Scroll reveal animation ===**/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true // Animations repeat
});

sr.reveal('.home__perfil, .about__image, .contact__mail', { origin: 'right' });
sr.reveal('.home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data', { origin: 'left' });
sr.reveal('.services__card, .projects__card', { interval: 100 });

