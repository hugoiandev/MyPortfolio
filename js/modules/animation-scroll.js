export default class OnScroll {
    constructor(intro, sections, projects, techs, techsMobile) {
        this.intro = document.querySelector(intro)
        this.section = document.querySelectorAll(sections)
        this.projects = document.querySelectorAll(projects)
        this.techno = document.querySelectorAll(techs)
        this.technoM = document.querySelectorAll(techsMobile)
        this.showSection = this.showSection.bind(this)
    }

    showIntro() {
        setTimeout(() => {
            this.intro.classList.add('ativo')
        }, this.intro.dataset.scrollTime)
    }
    
    showSection() {
        this.section.forEach((item) => {
            this.percent = Math.floor(item.offsetHeight * 50 / 100)
            if (item.getBoundingClientRect().top < this.percent) {
                item.classList.add('ativo')
            } if (item.classList.contains('projects') && item.classList.contains('ativo')) {
                this.showProjects()
            } if (item.classList.contains('technologies') && item.classList.contains('ativo')) {
                this.showTechno()
                this.showTechMobile()
            }
        })
    }

    showProjects() {
        this.projects.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('ativo')
            }, index * 400)
        })
    }

    showTechno() {
        this.techno.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('ativo')
            }, index * 400)
        })
    }

    showTechMobile() {
        this.technoM.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('ativo')
            }, index * 400)
        })
    }

    scrollEvent() {
        window.addEventListener('scroll', this.showSection)
    }
}