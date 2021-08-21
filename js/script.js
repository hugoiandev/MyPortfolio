import initMenuFixed from "./modules/menu-fixed.js"
initMenuFixed('.header', 'section')

import initMenuMobile from "./modules/menu-mobile.js"
initMenuMobile('.menu-mobile', '.hamburger', '.show-menu', '.mobile li a')

import OnScroll from "./modules/animation-scroll.js"

const scrollText = new OnScroll('.intro-text .text-button')
scrollText.showIntro()

const scrollImg = new OnScroll('.intro-text img')
scrollImg.showIntro()

const scrollSections = new OnScroll(null, 'section:not(.intro)', '.links-projects div', '.container-technologies div', '.container-technologies-mobile div')
scrollSections.scrollEvent()

import ScrollSuave from "./modules/scroll-suave.js"
const linksScroll = new ScrollSuave('[href^="#"]', 'section')
linksScroll.onClickEvent()