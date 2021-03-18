const docElem = document.documentElement


;(function main () {
  manageJobCards()
  manageHeaderLinks()
  hideAndShowHeaderOnScroll()
  manageSkillFigures()
  manageMobileHeader()
})()


function manageJobCards () {
  delegate('.job-card__button', 'click', button => {
    const card = button.closest('.job-card')
    const details = $('.job-card__details', card)
    const detailsContent = $('.job-card__details-content', card)
    const expandedCard = $('.job-card--expanded') || null
    if (card === expandedCard) {
      card.classList.remove('job-card--expanded')
      details.style.height = 0
    } else {
      card.classList.add('job-card--expanded')
      details.style.height = `${detailsContent.offsetHeight}px`
      if (expandedCard) {
        expandedCard.classList.remove('job-card--expanded')
        $('.job-card__details', expandedCard).style.height = 0
      }
    }

    const header = $('.header')
    header.classList.add('header--hidden')
    header.classList.remove('header--expanded')

    setTimeout(() => {
      scroll({ y: card.offsetTop - 20, acceleration: 1.5 }, () => {
        setTimeout(() => {
          const header = $('.header')
          header.classList.add('header--hidden')
          header.classList.remove('header--expanded')
        }, 30)
      })
    }, 330)
  })
}


function manageHeaderLinks () {
  delegate('.header__link', 'click', (link, e) => {
    e.preventDefault()
    const id = link.getAttribute('href').replace('#', '')
    const anchor = $(`[data-nav-id="${id}"]`)
    if (!anchor) { return }

    const header = $('.header')
    header.classList.add('header--hidden')
    header.classList.remove('header--expanded')

    location.hash = id
    scroll({ y: anchor.offsetTop - 40 }, () => {
      setTimeout(() => {
        const header = $('.header')
        header.classList.add('header--hidden')
        header.classList.remove('header--expanded')
      }, 30)
    })
  })
}


function hideAndShowHeaderOnScroll () {
  let prevY = 0
  const actualize = () => {
    const header = $('.header')
    const y = window.scrollY
    const dy = y - prevY
    const edge1 = window.innerWidth > 1150 ? 80 : 50
    const edge2 = window.innerWidth > 1150 ? 100 : 70

    let hidden
    let withShadow
    if (y < edge1) {
      hidden = false
      withShadow = false
    } else if (y > edge2) {
      if (dy > 0) { // scrolled down
        hidden = true
        withShadow = true
      } else { // scrolled up
        hidden = false
        withShadow = true
      }
    }

    prevY = y
    header.classList.toggle('header--hidden', hidden)
    header.classList.toggle('header--with-shadow', withShadow)
  }

  actualize()
  setTimeout(actualize, 100)
  window.addEventListener('scroll', actualize, { passive: true })
}


function manageSkillFigures () {
  const move = (figure) => {
    const dx = 50 * (Math.random() - 1)
    const dy = 50 * (Math.random() - 1)
    figure.style.transform = `translate(${dx}px, ${dy}px)`
  }

  const figures = $$('.skills__figure')
  for (const figure of figures) {
    move(figure)
    setInterval(() => {
      move(figure)
    }, 500 + Math.random() * 1000)
  }
}


function manageMobileHeader () {
  delegate('.header__burger', 'click', () => {
    const header = $('.header')
    header.classList.toggle('header--expanded')
  })
}


function delegate (selector, eventName, fn) {
  document.body.addEventListener(eventName, e => {
    const elem = e.target.closest(selector)
    if (!elem) { return }
    fn(elem, e)
  })
}



function $ (selector, startNode = document) {
  return startNode.querySelector(selector)
}


function $$ (selector, startNode = document) {
  return startNode.querySelectorAll(selector)
}


function scroll ({ y, acceleration = 10 }, cb) {
  y = Math.max(0, Math.min(y, docElem.scrollHeight - window.innerHeight))
  let velocity = 0

  const makeStep = () => {
    if (docElem.scrollTop < y) {
      docElem.scrollTop += velocity
      if (docElem.scrollTop >= y) {
        docElem.scrollTop = y
        cb()
        return
      }
    } else {
      docElem.scrollTop -= velocity
      if (docElem.scrollTop <= y) {
        docElem.scrollTop = y
        cb()
        return
      }
    }
    velocity += acceleration
    requestAnimationFrame(makeStep)
  }

  makeStep()
}
