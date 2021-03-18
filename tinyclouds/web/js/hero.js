(function () {
  const STEP_WIDTH = 376

  const $ = document.querySelector.bind(document)
  const $$ = document.querySelectorAll.bind(document)
  const nextButton = $('.hero__next-button')
  const pagingPrevButton = $('.hero__paging-prev')
  const pagingNextButton = $('.hero__paging-next')
  const slideCount = $$('.hero__visual-img').length
  let step = 0

  nextButton.addEventListener('click', function () {
    setStep(step + 1)
  })
  pagingPrevButton.addEventListener('click', function () {
    setStep(step - 1)
  })
  pagingNextButton.addEventListener('click', function () {
    setStep(step + 1)
  })

  function setStep(value) {
    step = value
    if (step < 0) {
      step = slideCount - 1
    } else if (step >= slideCount) {
      step = 0
    }
    updateUi()
  }

  function updateUi() {
    // updateActiveState('.hero__visual-img-wrap')
    updateActiveState('.hero__numeric-paging-figure')
    updateActiveState('.hero__numeric-paging-number span')
    updateActiveState('.hero__title span')
    updateActiveState('.hero__subtitle span')
  }

  function updateActiveState(selector) {
    // const active = $(`${selector}[data-state="active"]`)
    // active.removeAttribute('data-state')

    // const wasActive = $(`${selector}[data-state="was-active"]`)
    // if (wasActive) {
    //   wasActive.style.transition = 'none'
    //   wasActive.removeAttribute('data-state')
    // }

    // document.body.getClientRects()
    // if (wasActive) {
    //   wasActive.style.transition = null
    // }
    // document.body.getClientRects()
    // active.setAttribute('data-state', 'was-active')
    // $(`${selector}:nth-child(${step + 1})`).setAttribute('data-state', 'active')

    const wasActive = $(`${selector}[data-state="was-active"]`)
    if (wasActive) {
      wasActive.style.transition = 'none'
      wasActive.style.transitionDelay = '0s'
      wasActive.removeAttribute('data-state')
      requestAnimationFrame(() => {
        wasActive.style.transition = null
        wasActive.style.transitionDelay = null
      })
    }
    requestAnimationFrame(() => {
      $(`${selector}[data-state="active"]`).setAttribute('data-state', 'was-active')
      $(`${selector}:nth-child(${step + 1})`).setAttribute('data-state', 'active')
    })

    // const active = $(`${selector}[data-state="active"]`)
    // const activeBefore = $(`${selector}[data-state="active-before"]`)
    // const activeAfter = $(`${selector}[data-state="active-after"]`)
    // if (active) {
    //   active.removeAttribute('data-state')
    // }
    // if (activeBefore) {
    //   activeBefore.removeAttribute('data-state')
    // }
    // if (activeAfter) {
    //   activeAfter.removeAttribute('data-state')
    // }

    // const nextActive = $(`${selector}:nth-child(${step + 1})`)
    // const nextActiveBefore = nextActive.previousElementSibling || nextActive.parentElement.lastChild
    // const nextActiveAfter = nextActive.nextElementSibling || nextActive.parentElement.firstChild
    // nextActive.setAttribute('data-state', 'active')
    // nextActiveBefore.setAttribute('data-state', 'active-before')
    // nextActiveAfter.setAttribute('data-state', 'active-after')
  }
})()
