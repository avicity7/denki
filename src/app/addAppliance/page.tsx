'use client'
import Navbar from "@/src/components/navbar"
import { getDocs, setDoc, doc, collection, onSnapshot, deleteDoc } from "@firebase/firestore"
import { firestore } from "@/utils/firebase"
import { app } from "@/utils/firebase"
import { getAuth } from "firebase/auth"
import { useState, useEffect } from "react"
import { Text, Input, Button } from "@chakra-ui/react"
import SyncIcon from '@mui/icons-material/Sync';

let creating = true

const AddAppliance = () => {
  const auth = getAuth(app)
  const [applianceId, setApplianceId] = useState("")
  const [buttonText, setButtonText] = useState(true)
  const [refresh, setRefresh] = useState(true)
  
  const addAppliance = (deviceId: string) => {
    if (!creating) {
     creating = !creating
     setButtonText(false)
     const ref = doc(firestore, "devices", String(deviceId))
     let data = {
       deviceName: "deviceName",
       currentUsage: 0
     }
     try {
       setDoc(ref,data)
       .then(() => {
         setButtonText(true)
       })
     }
     catch(err) {
       console.log(err)
     }
    }
    creating = !creating
   }

  return (
    <>
      <Navbar currentPage={"AddAppliance"}/>

      <div className="flex flex-col justify-center items-center p-12 space-y-6 font-sans content-center">
          <Text className="font-bold text-xl text-black">Add an Appliance</Text>
        <div className='max-w-lg'>
          <Input 
            variant="outline" 
            className="bg-gray-100 focus:bg-white" 
            focusBorderColor="#3F3E84"
            onChange={(e) => {
              setApplianceId(e.target.value)
            }}
          />
        </div>
        <Button className="w-lg bg-[#3F3E84] hover:bg-purple-600" onClick={() => {
          addAppliance(applianceId)
        }}>
          {buttonText ? 
            <Text className="text-white">Add an Appliance</Text>
          :
            <SyncIcon className="text-white animate-spin transform rotate-180"/>
          }
        </Button>
      </div>
    </>
  )
}

export default AddAppliance