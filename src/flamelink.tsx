import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import flamelink from 'flamelink/app'
import 'flamelink/cf/content'
import 'flamelink/cf/storage'

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyBL2VMc9NfWNTGaffzCX1qnVkhfNiatGuo',
    authDomain: 'jumper-park.firebaseapp.com',
    projectId: 'jumper-park',
    storageBucket: 'jumper-park.appspot.com',
    messagingSenderId: '950788848581',
    appId: '1:950788848581:web:158dc1a053c397a7d3e9ac',
    measurementId: 'G-W3SV1H7P0X'
})

const flamelinkApp = flamelink({ 
    firebaseApp,
    dbType: 'cf'
})

export default flamelinkApp
