const tabsHandler = document.querySelectorAll('[data-tabs-handler]')
const tabsContent = document.querySelectorAll('[data-tabs-field]')



for (let btn of tabsHandler) {
    btn.addEventListener('click', () => {
        tabsHandler.forEach(item => {
            item.classList.remove('design-list__item_active')
        })
        btn.classList.add('design-list__item_active')

        tabsContent.forEach(cont => {
            if (cont.dataset.tabsField === btn.dataset.tabsHandler) {
                cont.classList.remove('hidden')
            }
            else {
                cont.classList.add('hidden')
            }
        })

    })
}