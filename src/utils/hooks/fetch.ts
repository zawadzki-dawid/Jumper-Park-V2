import firebase from '../../flamelink'
import { useReducer, useEffect, Reducer } from 'react'
import { doc, query, where, getDoc, getDocs, collection, getDocFromCache, getDocsFromCache } from 'firebase/firestore'

type Cache = string[]

type State<T> = {
    error: Error | null
    data: T | null
    loading: boolean
}

type StateAction<T> =
| {
    type: 'loading'
}
| {
    type: 'error',
    error: State<T>['error']
}
| {
    type: 'data',
    data: State<T>['data']
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
                loading: true
            }

        case 'error':
            return {
                data: null,
                error: null,
                loading: false
            }
            
        case 'data':
            return {
                error: null,
                loading: false,
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
    }

    if (!docSnap.exists()) {
        throw new Error(`${documentId} doesn't exists in collection!`)
    }
    if (firebase.isCacheEnabled) {
        cache.push(documentId)
    }

    return docSnap.data() as T
}

export const useFetchContent = <T,>(documentId: string) => {
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
            dispatch({ type: 'error', error: null })
        }
    }

    return state
}

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
    // Reducer
    const [state, dispatch] = useReducer<Reducer<State<T[]>, StateAction<T[]>>>(stateReducer, initState)

    // Effect
    useEffect(() => {
        fetchContent()
    }, [])

    // Method
    const fetchContent = async () => {
        try {
            dispatch({ type: 'loading' })
            const data = await getDataArray<T>(schemaName)
            dispatch({ type: 'data', data: data })
        } catch (error) {
            dispatch({ type: 'error', error: null })
        }
    }

    return state
}