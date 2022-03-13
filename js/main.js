const data = {
  selected: null
}

const cardsContainer = document.querySelector('.products .product-cards')
const cards = document.querySelectorAll('.products .product-cards .card');
const descriptions = document.querySelectorAll('.products .product-descriptions .card');

const cardContainerClass = "product-cards position-absolute top-0 left-0 right-0"
const descriptionClass = "card ms-5 position-absolute"

openCard = (i) => {
  data.selected = i

  if(!descriptions[i]) {
    data.selected = null
    return
  }

  cardsContainer.className = cardContainerClass + " animation-slide-up-out"
  descriptions[i].className = descriptionClass + " animation-slide-up-in supertop"
}

closeCard = () => {
  cardsContainer.className = cardContainerClass + " animation-slide-down-in supertop"
  descriptions[data.selected].className = descriptionClass + " animation-slide-down-out"
}

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => openCard(i))
}

document.getElementById('main-menu').addEventListener('click', () => closeCard())