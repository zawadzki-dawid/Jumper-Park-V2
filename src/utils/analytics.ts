import ReactGA from 'react-ga4'

const gaId = 'UA-142956782-1'

const isProduction = process.env.NODE_ENV === 'production'

ReactGA.initialize(gaId, {
    testMode: !isProduction
})

export const sendPageView = (name: string) => {
    if (!isProduction) {
        return
    }
    ReactGA.send({ hitType: 'pageview', page: name })
}
