(function () {
  window.app.control = {
    toggleDisabled: (elem, disabled) => {
      elem.classList.toggle('control--disabled', disabled)
    }
  }
})()