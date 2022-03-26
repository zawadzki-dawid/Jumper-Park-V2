import styled from 'styled-components'
import { sendPageView } from '../../utils/analytics'
import { CSSTransition } from 'react-transition-group'
import { useCurrentPath } from '../../utils/hooks/path'
import { createContext, ReactNode, useLayoutEffect, useState, useCallback } from 'react'

// Assets
import LogoImage from '../../assets/logo/logo-text.png'

// Components
import Icon from '../icon/Icon'

// Context
const init = {
    entered: false,
    setEntered: (_: boolean) => {} 
}

type ContextType = typeof init

export const LoaderContext = createContext<(ContextType)>(init)

// Main component

export interface Props {
    children: ReactNode
}

const Loader = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 99999;
    position: fixed;
    background-color: var(--grey-light);

    > div {
        height: 100%;
        display: grid;
        row-gap: 20px;
        align-content: center;
        justify-items: center;
        grid-template-rows: 100px 50px;
    }

    .logo {
        height: 100%;
    }

    &.menu-exit,
    &.loader-enter, 
    &.loader-exit-done,
    &.loader-enter-active,
    &.loader-enter-done {
        opacity: 1;
    }

    &.loader-exit-active {
        opacity: 0;
        transition: opacity 300ms;
    }
`

export default ({
    children
}: Props) => {
    // State
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [isEntered, setIsEntered] = useState<boolean>(false)

    // Location
    const currentPath = useCurrentPath()

    // Effect
    useLayoutEffect(() => {
        sendPageView(currentPath)
        setLoaderVisibility(true)
    }, [currentPath])

    // Method
    const setLoaderVisibility = useCallback((state: boolean) => {
        if (state) {
            setIsVisible(state)
            return
        }
        setIsEntered(state)
        setIsVisible(state)
    }, [setIsVisible])

    const onEntered = () => {
        setIsEntered(true)
    }

    return (
        <>
            <CSSTransition
                timeout={300}
                in={isVisible}
                unmountOnExit={true}
                classNames={'loader'}
                onEntered={onEntered}
            >
                <Loader>
                    <div>
                        <img
                            alt={'Logo'}
                            src={LogoImage}
                            className={'logo'}
                        />
                        <Icon
                            image={'loader'}
                        />
                    </div>
                </Loader>
            </CSSTransition>
            <LoaderContext.Provider
                value={{
                    entered: isEntered,
                    setEntered: setLoaderVisibility
                }}
            >
                { children }
            </LoaderContext.Provider>
        </>
    )
}