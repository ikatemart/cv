(function () {
  const header = $('header')
  const docElem = document.documentElement

  const state = {
    openDropdownId: null,
    mobileMenuOpen: false,
    mobileMenuExpandedItemIds: [],
  }


  ;(function main () {
    resetStateOnResize()
    handleDesktopMenuItemsClicks()
    handleMobileMenuItemsClicks()
    handleMobileMenuTogglerClick()
  })()


  function resetStateOnResize () {
    window.addEventListener('resize', () => {
      state.openDropdownId = null
      state.mobileMenuOpen = false
      updateUi()
    })
  }


  function handleDesktopMenuItemsClicks () {
    const items = $$('.header__menu-item--dropdown')
    for (const item of items) {
      item.addEventListener('click', () => {
        const id = item.dataset.id
        if (state.openDropdownId === id) {
          state.openDropdownId = null
        } else {
          state.openDropdownId = id
        }
        updateUi()
      })
    }
  }


  function handleMobileMenuItemsClicks () {
    const links = $$('.header__mobile-menu-item--dropdown .header__menu-link')
    for (const link of links) {
      link.addEventListener('click', () => {
        const item = link.closest('.header__mobile-menu-item')
        const content = item.querySelector('.header__mobile-menu-dropdown-content')
        if (item.classList.contains('header__mobile-menu-item--expanded')) {
          item.classList.remove('header__mobile-menu-item--expanded')
          content.style.height = '0px'
        } else {
          item.classList.add('header__mobile-menu-item--expanded')
          document.body.getBoundingClientRect()
          content.style.display = 'block'
          content.style.height = null
          document.body.getBoundingClientRect()
          const height = content.offsetHeight
          content.style.height = '0px'
          document.body.getBoundingClientRect()
          content.style.height = `${height}px`
        }
      })
    }
  }


  function handleMobileMenuTogglerClick () {
    const toggler = $('.header__mobile-menu-toggler')
    toggler.addEventListener('click', () => {
      state.mobileMenuOpen = !state.mobileMenuOpen
      updateUi()
    })
  }


  function updateUi () {
    // for desktop
    header.classList.toggle('header--dropdown-open', !!state.openDropdownId)
    const openContent = $('.header__dropdown-content--open')
    if (openContent) {
      openContent.classList.remove('header__dropdown-content--open')
    }
    if (state.openDropdownId) {
      const contentToOpen = $(`.header__dropdown-content[data-id="${state.openDropdownId}"]`)
      contentToOpen.classList.add('header__dropdown-content--open')
    }

    // for mobile
    docElem.classList.toggle('global--mobile-menu-open', state.mobileMenuOpen)
    docElem.style.overflow = state.mobileMenuOpen ? 'hidden' : null
  }
})()
