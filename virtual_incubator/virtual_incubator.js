// Scroll reveal effect
const revealElements = document.querySelectorAll(
  '.info-card, .offer-card, .apply-item'
)

const revealOnScroll = () => {
  const windowHeight = window.innerHeight

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top

    if (elementTop < windowHeight - 100) {
      el.classList.add('show')
    }
  })
}

window.addEventListener('scroll', revealOnScroll)
revealOnScroll()
