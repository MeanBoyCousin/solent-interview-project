const largeYInOut = {
    hidden: { opacity: 0.2, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0, 0, 0.2, 1]
        }
    },
    exit: {
        opacity: 0.2,
        y: 30,
        transition: {
            duration: 0.25,
            ease: [0.4, 0, 1, 1]
        }
    }
}

const promptYInOut = {
    hidden: { opacity: 0.2, y: '100%' },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.25,
            ease: [0, 0, 0.2, 1]
        }
    },
    exit: {
        opacity: 0.2,
        y: '100%',
        transition: {
            duration: 0.2,
            ease: [0.4, 0, 1, 1]
        }
    }
}

const mediumXInOut = {
    hidden: { opacity: 0.2, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.25,
            ease: [0, 0, 0.2, 1]
        }
    },
    exit: {
        opacity: 0.2,
        x: -30,
        transition: {
            duration: 0.2,
            ease: [0.4, 0, 1, 1]
        }
    }
}

const smallOpacity = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.1,
            ease: [0, 0, 0.2, 1],
            delay: 0.2
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.1,
            ease: [0.4, 0, 1, 1]
        }
    }
}

export { largeYInOut, mediumXInOut, promptYInOut, smallOpacity }
