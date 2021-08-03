export default class ScrollSuave {
    constructor(links) {
        this.link = document.querySelectorAll(links)
    }

    scrollSuave(event) {
        event.preventDefault()
        window.scrollTo({top: 300, behavior: "smooth"})
        console.log(event)
    }

    onClickEvent() {
        this.link.forEach((item) => {
            item.addEventListener('click', this.scrollSuave)
        })
    }
}