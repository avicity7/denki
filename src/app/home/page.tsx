'use client'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'
import SettingsIcon from '@mui/icons-material/Settings';
import { getDoc, setDoc, doc, onSnapshot, collection, query, where } from "@firebase/firestore"
import { app, firestore } from "@/utils/firebase"
import { getAuth } from "firebase/auth"
import { useState, useEffect } from "react"

//Component Imports
import ApplianceCard from '../../components/applianceCard'
import Navbar from '../../components/navbar'


const Home = () => {
  let auth = getAuth(app)
  interface Device {
    deviceName: string,
    currentUsage: number
  }
  const [devices, setDevices] = useState<Device[]>([])

  useEffect(() => {
    console.log('reading')
    let email = auth.currentUser?.email
    const userRef = doc(firestore, "users", String(email))
    if (email && devices) {
      getDoc(userRef)
      .then((docSnap: any) => {
        let savedDeviceIds = docSnap.data().devices
        let q = query(collection(firestore, 'devices'), where('__name__', 'in', savedDeviceIds ))
        const unsub = onSnapshot(q, (deviceSnap) => {
          const deviceArray: Device[] = []
          deviceSnap.forEach((doc) => {
            deviceArray.push(doc.data() as Device)
          })
          setDevices(deviceArray)
        })
        return () => unsub()
      })
    }
  })

  return (
    <>
      <Navbar currentPage={"Home"}/>

      <div className="font-sans">
        <div className="mb-6 p-12 justify-between flex">
          <Text className="font-bold text-3xl text-gray-700">At a glance</Text>
          <SettingsIcon className='text-gray-300'/>
        </div>
        <ul className="mx-12">
          {devices.length > 0 && devices.map((device) => (
            <li key={device.deviceName}>
              <ApplianceCard appliance={{name: device.deviceName, currentUsage: device.currentUsage}}/>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home
