import { LazyExoticComponent, Suspense } from 'react'
import { Switch, Route, RouteProps } from 'react-router-dom'

// Views
import Homepage from '../../views/homepage/Homepage'
import PostBooking from '../../views/post-booking/PostBooking'

export type ViewRoute = {
    path: string
    exact?: boolean
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
                        const { path, View, exact } = route
                        return (
                            <Route
                                key={index}
                                path={path}
                                exact={exact ?? false}
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