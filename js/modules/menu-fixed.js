export default function initMenuFixed (element, section) {
    const header = element
    const sectionElement = section

    const menu = document.querySelector(header)
    const sections = document.querySelectorAll(sectionElement)

    // Funcao que fixa o menu
    function fixarMenu() {
        if (window.pageYOffset > 0) {
            menu.classList.add('fixed')
        } else {
            menu.classList.remove('fixed')
        }
    }

    // Funcao que muda a cor do header de acordo com a cor de background
    function mudaCorHeader() {
        sections.forEach((item) => {
            if (item.classList.contains('about') || item.classList.contains('technologies')) {
                if (item.getBoundingClientRect().top < menu.offsetHeight + menu.offsetHeight) {
                    menu.classList.add('changeColor')

                    if (item.getBoundingClientRect().bottom < menu.offsetHeight) {
                        menu.classList.remove('changeColor')
                    }

                    if (item.getBoundingClientRect().top > menu.offsetHeight) {
                        menu.classList.remove('changeColor')
                    }
                }
            }
        })
    }

    // Funcoes de callback do evento
    function initFunctions() {
        fixarMenu()
        mudaCorHeader()
    }

    // Evento scroll
    function onScrollEvent() {
        window.addEventListener('scroll', initFunctions)
    }

    // Inicia evento
    function initEvent() {
        onScrollEvent()
    }

    fixarMenu()
    initEvent()
}