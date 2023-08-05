const { to, set, registerPlugin } = gsap

registerPlugin(MorphSVGPlugin)

let getVar = key => getComputedStyle(document.documentElement).getPropertyValue(key)

const sidebar = document.querySelector('aside')

sidebar.querySelectorAll('button').forEach(button => {
    button.addEventListener('pointerenter', e => {
        to(button, {
            '--c-background': getVar('--c-hover'),
            '--c-color': getVar('--c-active'),
            duration: .15
        })
    })
    button.addEventListener('pointermove', e => {
        to(button, {
            '--c-background': getVar('--c-hover'),
            '--c-color': getVar('--c-active'),
            duration: .15
        })
    })
    button.addEventListener('pointerleave', e => {
        to(button, {
            '--c-background': getVar('--c-sidebar'),
            '--c-color': button.classList.contains('active') || sidebar.animating === button ? getVar('--c-active') : getVar('--c-default'),
            duration: .15
        })
    })
})