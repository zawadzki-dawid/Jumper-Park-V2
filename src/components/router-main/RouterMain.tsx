import { LazyExoticComponent, Suspense } from 'react'
import { Switch, Route, RouteProps } from 'react-router-dom'

// Views
import Homepage from '../../views/homepage/Homepage'
import PostBooking from '../../views/post-booking/PostBooking'

type ViewRoute = {
    path: string
    View: LazyExoticComponent<() => JSX.Element>
}

interface Props extends RouteProps {
    routes: ViewRoute[]
}

export default ({
    routes
}: Props) => {
    return (
        <Suspense
            fallback={null}
        >
            <Switch>
                <Route
                    exact
                    path={'/'}
                    render={() => 
                        <Homepage/>
                    }
                />
                <Route
                    exact
                    path={'/dziekujemy'}
                    render={() => 
                        <PostBooking/>
                    }
                />
                {
                    routes.map((route, index) => {
                        const { path, View } = route
                        return (
                            <Route
                                key={index}
                                path={path}
                                render={() => 
                                    <View/>
                                }
                            />
                        )
                    })
                }
            </Switch>
        </Suspense>
    )
}