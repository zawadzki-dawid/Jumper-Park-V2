import flamelinkApp from '../../flamelink'
import { useReducer, useEffect, Reducer } from 'react'

type Params = Parameters<typeof flamelinkApp.content.get>

type State<T> =
{
    data: null
    error: null
}
| {
    data: T
    error: null
} |
{
    data: null
    error: Error
}

type StateAction<T> =
| {
    type: 'loading'
}
| {
    type: 'error',
    error: Error
}
| {
    type: 'data',
    data: T
}

const stateReducer = <T,>(
    _: State<T>, 
    action: StateAction<T>
): State<T> => {
    switch(action.type) {
        case 'loading':
            return {
                data: null,
                error: null,
            }

        case 'error':
            return {
                data: null,
                error: action.error
            }
            
        case 'data':
            return {
                error: null,
                data: action.data
            }
    }
}

// Data
const initState = {
    data: null,
    error: null,
    loading: false
}

const getData = async <T,>(...params: Params): Promise<T> => {
    const cacheData = sessionStorage.getItem(JSON.stringify(...params))
    
    if (cacheData) {
        return JSON.parse(cacheData) as T
    }
    const data = await flamelinkApp.content.get(...params)
    if(data === null) {
        throw new Error('Error while fetching data!')
    }
    sessionStorage.setItem(JSON.stringify(...params), JSON.stringify(data))
    return data as T
}

export const useFetchContent = <T extends Object,>(...params: Params) => {
    // Reducer
    const [state, dispatch] = useReducer<Reducer<State<T>, StateAction<T>>>(stateReducer, initState)

    // Effect
    useEffect(() => {
        fetchContent()
    }, [])

    // Method
    const fetchContent = async () => {
        try {
            dispatch({ type: 'loading' })
            const data = await getData<T>(...params)
            dispatch({ type: 'data', data: data })
        } catch (error) {
            dispatch({ type: 'error', error: error as Error })
        }
    }

    return state
}