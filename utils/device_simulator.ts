const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')

const serviceAccount = require('./serviceaccount.json')

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore()


const randomize = async() => {
  let devices = ['abif12','2fex2h','2z82nh']
  let deviceData = [
    {
      deviceName: "Air Conditioner",
      currentUsage: (Math.random()*(0.9-0.3)+0.3).toFixed(3)
    },
    {
      deviceName: "Washing Machine",
      currentUsage: (Math.random()*(0.6-0.1)+0.1).toFixed(3)
    },
    {
      deviceName: "TV",
      currentUsage: (Math.random()*(0.3-0.05)+0.05).toFixed(3)
    }
  ]
  for (let i = 0; i < devices.length; i++) {
    let deviceRef = db.collection('devices').doc(devices[i])
    await deviceRef.set(deviceData[i])
  }
  setTimeout(randomize,3000)
}

randomize()