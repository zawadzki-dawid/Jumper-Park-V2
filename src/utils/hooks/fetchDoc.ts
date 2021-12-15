import firebase from '../../flamelink'
import { useReducer, useEffect, Reducer } from 'react'
import { doc, getDoc, getDocFromCache } from 'firebase/firestore'

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

const cache: Cache = []

const getData = async <T,>(documentId: string): Promise<T> => {
    let docSnap
    const docRef = doc(firebase.firestoreApp, 'fl_content', documentId)

    if (cache.includes(documentId)) {
        docSnap = await getDocFromCache(docRef)
    } else {
        docSnap = await getDoc(docRef)
        if (firebase.isCacheEnabled) {
            cache.push(documentId)
        }
    }

    if (!docSnap.exists()) {
        throw new Error(`${documentId} doesn't exists in collection!`)
    }

    return docSnap.data() as T
}

export const useFetchContent = <T extends Object,>(documentId: string) => {
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
            const data = await getData<T>(documentId)
            dispatch({ type: 'data', data: data })
        } catch (error) {
            dispatch({ type: 'error', error: error as Error })
        }
    }

    return state
}