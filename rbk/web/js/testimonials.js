(function () {
  const control = window.app.control

  const STEP_WIDTH = 376

  const $ = document.querySelector.bind(document)
  const $$ = document.querySelectorAll.bind(document)
  const controlPrev = $('.testimonials__control--prev')
  const controlNext = $('.testimonials__control--next')
  const slider = $('.testimonials__slider')
  const cardCount = $$('.testimonials__card').length
  let step = 0

  updateUi()

  controlPrev.addEventListener('click', function () {
    step -= 1
    updateUi()
  })

  controlNext.addEventListener('click', function () {
    step += 1
    updateUi()
  })

  function updateUi() {
    control.toggleDisabled(controlPrev, step === 0)
    control.toggleDisabled(controlNext, step === cardCount - 3)
    slider.style.transform = `translateX(-${step * STEP_WIDTH}px)`
  }
})()
