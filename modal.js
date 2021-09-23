const modalBtn = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')
const modalclose = document.querySelector('.modal__close')

modalBtn.forEach(moreItem => {
    moreItem.addEventListener('click', () => modal.classList.remove('hidden'))
})


// modal__close
//overlay
modal.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('overlay') || target.classList.contains('modal__close') || target.classList.contains('modal__button')) {
        modal.classList.add('hidden')
    }
})