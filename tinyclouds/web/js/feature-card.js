const links = document.querySelectorAll(".feature-card__link")

for (let link of links) {
  link.addEventListener("mouseenter", () => {
    const card = link.closest(".feature-card")
    card.classList.add("feature-card--learn-more-hovered")
  })
  link.addEventListener("mouseleave", () => {
    const card = link.closest(".feature-card")
    card.classList.remove("feature-card--learn-more-hovered")
  })
}