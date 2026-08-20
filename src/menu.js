document.addEventListener('DOMContentLoaded', function() {

    const btnMenu = document.getElementById('btn-menu')
    const menu = document.getElementById('menu-mobile')
    const overlay = document.getElementById('overlay-menu')
    const btnFechar = document.querySelector('.menu-fechar')

    // Abre o menu
    btnMenu.addEventListener('click', () => {
        menu.classList.add('abrir-menu')
        overlay.style.display = 'block'
    })

    // Fecha ao clicar no X
    btnFechar.addEventListener('click', () => {
        menu.classList.remove('abrir-menu')
        overlay.style.display = 'none'
    })

    // Fecha ao clicar no overlay
    overlay.addEventListener('click', () => {
        menu.classList.remove('abrir-menu')
        overlay.style.display = 'none'
    })

    // Fecha ao clicar em qualquer link do menu mobile
    document.querySelectorAll('.menu-mobile a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('abrir-menu')
            overlay.style.display = 'none'
        })
    })

})