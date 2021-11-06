import { useEffect } from 'react'
import Baner from '../../components/baner/Baner'
import { useFetchContents } from '../../utils/hooks/fetch'

export default () => {
    // State
    const { data, error, loading } = useFetchContents('cennik')

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
            <Baner 
                content={'Cennik'}
            />
            <main></main>
        </>
    )
}