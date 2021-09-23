//humburger-menu
//humburger-menu-active
//menu-active
// 

const burger = document.querySelector('.humburger-menu')
const menu = document.querySelector('.menu')
const menuListItem = document.querySelectorAll('.menu-list__item')

const toggleMenu = () => {
    menu.classList.toggle('menu-active')
    burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => toggleMenu())

menuListItem.forEach(item => {
    item.addEventListener('click', () => toggleMenu())
})
