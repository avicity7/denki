const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')

const serviceAccount = require('./serviceaccount.json')

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore()

const deviceRef = db.collection('devices').doc('abeif12')


const randomize = async() => {
  let data = {
    deviceName: "Air Conditioner",
    currentUsage: Math.random()*(0.9-0.3)+0.3
  }
  await deviceRef.set(data)
  setTimeout(randomize,10000)
}

randomize()