const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')

const openNav = () => {
    openBtn.setAttribute('aria-expanded', true)
}

const closeNav = () => {
    openBtn.setAttribute('aria-expanded', false)
}

openBtn.addEventListener('click', openNav)
closeBtn.addEventListener('click', closeNav)
