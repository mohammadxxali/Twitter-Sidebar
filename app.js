const { to, set, registerPlugin } = gsap

registerPlugin(MorphSVGPlugin)

let getVar = key => getComputedStyle(document.documentElement).getPropertyValue(key)

const sidebar = document.querySelector('aside')