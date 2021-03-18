(function main () {
  const modals = $$('.modal')
  for (const modal of modals) {
    const id = modal.dataset.id
    const togglers = $$(`[data-modal-id="${id}"]`)
    if (togglers.length === 0) continue

    // open modal on any toggler click
    for (const toggler of togglers) {
      toggler.addEventListener('click', () => {
        toggleModal(modal, true)
      })
    }

    // close modal on close button click
    const closeButton = modal.querySelector('.modal__close-button')
    closeButton.addEventListener('click', () => {
      toggleModal(modal, false)
    })

    // close modal on background click
    modal.addEventListener('click', e => {
      if (!e.target.closest('.modal__window')) {
        toggleModal(modal, false)
      }
    })
  }

  // close modal on ESC
  document.addEventListener('keyup', e => {
    if (e.key === 'Escape') {
      const modal = $('.modal--open')
      if (modal) {
        toggleModal(modal, false)
      }
    }
  })

  function toggleModal (modal, open = false) {
    if (open) {
      modal.classList.add('modal--open')
      document.body.style.overflow = 'hidden'
    } else {
      modal.classList.remove('modal--open')
      document.body.style.overflow = null
    }
  }
})()
