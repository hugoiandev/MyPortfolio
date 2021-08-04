export default class ScrollSuave {
    constructor(links, sections) {
        this.link = document.querySelectorAll(links)
        this.section = document.querySelectorAll(sections)
        this.scrollSuave = this.scrollSuave.bind(this)
    }

    scrollSuave(event) {
        event.preventDefault()
        this.section.forEach((item) => {
            this.offset = item.offsetTop * 98 / 100
            if (event.target.attributes.href.value.replace('#', '') === item.id) {
                window.scrollTo({top: this.offset, behavior: 'smooth'})
            }
        })
    }

    onClickEvent() {
        this.link.forEach((item) => {
            item.addEventListener('click', this.scrollSuave)
        })
    }
}