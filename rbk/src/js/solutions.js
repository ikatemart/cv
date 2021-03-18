(function () {
  const nextCardButton = $('.solutions__control')
  nextCardButton.addEventListener('click', () => {
    const cardsWithIndex = $$('.solutions__card[data-index]')
    for (const card of cardsWithIndex) {
      const index = Number(card.dataset.index)
      if (index === -1) {
        card.removeAttribute('data-index')
      } else {
        card.setAttribute('data-index', index - 1)
        if (index === 2) {
          const nextCard = (
            card.nextElementSibling ||
            card.parentElement.firstElementChild
          )
          nextCard.setAttribute('data-index', '2')
        }
      }
    }
  })
})()
