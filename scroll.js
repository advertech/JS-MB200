const links = document.querySelectorAll('.menu-list__link')
const scrollbtn = document.querySelector('.main__scroll')
const scrolls = [...links, scrollbtn]
//console.log(scrolls);

scrolls.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        //console.dir(event.target)
        // console.log(scrollbtn);
        const linkId = event.target.getAttribute('href').substr(1)
        console.log(linkId)
        document.getElementById(linkId).scrollIntoView({
            behavior: 'smooth'
        })
    })
})