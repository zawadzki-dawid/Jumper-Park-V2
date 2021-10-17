import { initializeApp } from 'firebase/app'
import { getFirestore, enableMultiTabIndexedDbPersistence } from 'firebase/firestore'

const firebase = initializeApp({
    apiKey: 'AIzaSyBL2VMc9NfWNTGaffzCX1qnVkhfNiatGuo',
    authDomain: 'jumper-park.firebaseapp.com',
    projectId: 'jumper-park',
    storageBucket: 'jumper-park.appspot.com',
    messagingSenderId: '950788848581',
    appId: '1:950788848581:web:158dc1a053c397a7d3e9ac',
    measurementId: 'G-W3SV1H7P0X'
})

const firestore = getFirestore()
let isCacheEnabled = true

enableMultiTabIndexedDbPersistence(firestore).catch((error) => {
    if (error.code === 'unimplemented') {
        isCacheEnabled = false
    }
    if (error.code === 'failed-precondition') {
        isCacheEnabled = false
    }
})


export default {
    firebaseApp: firebase,
    firestoreApp: firestore,
    isCacheEnabled
}
