export default function initMenuMobile(menuMobile, hamburger, showMenu, linkMenu) {
    const menu = document.querySelector(menuMobile)
    const burger = document.querySelector(hamburger)
    const menuM = document.querySelector(showMenu)
    const links = document.querySelectorAll(linkMenu)

    // Funcao de ativar o menu mobile ou desativar
    function activeMenu() {
        if (burger.classList.contains('ativo') && menuM.classList.contains('ativo')) {
            burger.classList.remove('ativo')
            menuM.classList.remove('ativo')
            burger.classList.add('inativo')
            menuM.classList.add('inativo')
        } else if (burger.classList.contains('inativo') && menuM.classList.contains('inativo')) {
            burger.classList.remove('inativo')
            menuM.classList.remove('inativo')
            burger.classList.add('ativo')
            menuM.classList.add('ativo')
        } else {
            burger.classList.add('ativo')
            menuM.classList.add('ativo')
        }
        window.addEventListener('click', verificaClick)
    }

    function verificaClick(event) {
        if (menuM.classList.contains('ativo') && event.clientY > menuM.offsetTop && event.clientX < menuM.offsetLeft || event.clientY > menuM.offsetHeight + menuM.offsetTop && menuM.classList.contains('ativo')) {
            activeMenu()
        }
    }

    function initHandleClickEvent() {
        menu.addEventListener('click', activeMenu)
        links.forEach((item) => {
            item.addEventListener('click', activeMenu)
        })
    }

    function initEvent() {
        initHandleClickEvent()
    }
    console.log(links)

    initEvent()
}