import firebase from '../../flamelink'
import { LoaderContext } from '../../components/loader/Loader'
import { useReducer, useEffect, Reducer, useContext } from 'react'
import { query, where, getDocs, collection, getDocsFromCache } from 'firebase/firestore'

type Cache = string[]

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
                error: null
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

const cache: Cache = []

const getDataArray = async <T,>(schemaName: string): Promise<T[]> => {
    let docsSnap
    const data: T[] = []
    const q = query(collection(firebase.firestoreApp, 'fl_content'), where('_fl_meta_.schema', '==', schemaName))

    if (cache.includes(schemaName)) {
        docsSnap = await getDocsFromCache(q)
    } else {
        docsSnap = await getDocs(q)
    }

    docsSnap.forEach((snap) => data.push(snap.data() as T))
    return data
}

export const useFetchContents = <T extends Object,>(schemaName: string) => {
    // Context 
    const { entered } = useContext(LoaderContext)

    // Reducer
    const [state, dispatch] = useReducer<Reducer<State<T[]>, StateAction<T[]>>>(stateReducer, initState)

    // Effect
    useEffect(() => {
        if (!entered) {
            return
        }
        fetchContent()
    }, [entered])

    // Method
    const fetchContent = async () => {
        try {
            dispatch({ type: 'loading' })
            const data = await getDataArray<T>(schemaName)
            dispatch({ type: 'data', data: data })
        } catch (error) {
            dispatch({ type: 'error', error: error as Error })
        }
    }

    return state
}