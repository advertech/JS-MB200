const lists = document.querySelectorAll('.feature-sub')
const btns = document.querySelectorAll('.feature__link')


btns.forEach((btnitem, index) => {
    btnitem.addEventListener('click', () => {
        btns.forEach((btnitem) => {
            btnitem.classList.remove('feature__link_active')
        })
        btnitem.classList.add('feature__link_active')

        lists.forEach((listItem) => {
            listItem.classList.add('hidden')
        })
        lists[index].classList.remove('hidden')
        console.dir(btnitem)
    })
})





// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', () => console.log(btns[i]))
// }




//btn.addEventListener('click', () => console.log('2'))




// btn.addEventListener('click', () => {
//     console.log('3')
//     console.log('25')
//     alert('elkfnqlkw qrklnlqkr')
// })