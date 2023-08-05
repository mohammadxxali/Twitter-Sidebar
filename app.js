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

sidebar.querySelectorAll('.home').forEach(button => wrap(button, () => {
    to(button, {
        keyframes: [{
            '--icon-fill-size': '12px',
            '--icon-outline-s': .9,
            '--icon-outline-o': 0,
            '--icon-house-s': .85,
            duration: .2
        }, {
            '--icon-house-s': 1,
            duration: .65,
            ease: 'elastic.out(1, .65)',
            onStart() {
                to(button, {
                    keyframes: [{
                        '--icon-feather-right-s': 1,
                        duration: .1,
                        delay: .2,
                        onStart() {
                            to(button, {
                                keyframes: [{
                                    '--icon-feather-right-x': '0px',
                                    '--icon-feather-right-r': '-16deg',
                                    duration: .4
                                }, {
                                    '--icon-feather-right-x': '-9px',
                                    '--icon-feather-right-r': '16deg',
                                    duration: .4
                                }, {
                                    '--icon-feather-right-x': '3px',
                                    '--icon-feather-right-r': '0deg',
                                    duration: .4
                                }, {
                                    '--icon-feather-right-o': 0,
                                    duration: .15
                                }]
                            })
                        }
                    }, {
                        '--icon-feather-right-y': '10px',
                        duration: 1.2
                    }]
                })
                to(button, {
                    keyframes: [{
                        '--icon-feather-left-s': 1,
                        duration: .1,
                        onStart() {
                            to(button, {
                                keyframes: [{
                                    '--icon-feather-left-x': '-14px',
                                    '--icon-feather-left-r': '16deg',
                                    duration: .4
                                }, {
                                    '--icon-feather-left-x': '-10px',
                                    '--icon-feather-left-r': '-12deg',
                                    duration: .4
                                }, {
                                    '--icon-feather-left-x': '-14px',
                                    '--icon-feather-left-r': '0deg',
                                    duration: .4
                                }, {
                                    '--icon-feather-left-o': 0,
                                    duration: .15
                                }]
                            })
                        }
                    }, {
                        '--icon-feather-left-y': '10px',
                        duration: 1.2
                    }]
                })
            },
            onComplete() {
                button.classList.add('active')
                sidebar.animating = false
            }
        }]
    })
}))