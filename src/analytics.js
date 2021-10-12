function createAnalytics() {
    let clicks = 0
    let isDestroyed = false

    const listener = () => clicks++

    document.addEventListener('click', listener)

    return {
        destroy() {
            document.removeEventListener('click', listener)
            isDestroyed = true
        },
        getClicks() {
            if (isDestroyed) {
                return 'Analytics is destroyed'
            }
            return clicks
        }
    }
}

window.analytics = createAnalytics()