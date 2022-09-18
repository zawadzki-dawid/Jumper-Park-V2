import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { LoaderContext } from '../../components/loader/Loader'

// Main

const Wrapper = styled.div``

export default () => {
    // Context
    const { entered, setEntered } = useContext(LoaderContext)

    // Effect
    useEffect(() => {
        if (entered) {
            setEntered(false)
            console.log('xd')
        }
    }, [entered])

    return (
        <Wrapper>
            xd
        </Wrapper>
    )
}