'use client'

import Image from 'next/image'
import { Text, Button } from '@chakra-ui/react'
import SettingsIcon from '@mui/icons-material/Settings';

//Component Imports
import ApplianceCard from '../components/applianceCard'
import Navbar from '../components/navbar'

const About = () => {
  return (
    <>
      <div className="flex flex-col font-sans pt-12 bg-neutral-800 items-center">
        <div className="flex justify-center items-center">
          <Image src='/denkiLogo.svg' alt='logo' width={28} height={28}/>
          <p className="font-sans text-xl font-extrabold ml-2 text-violet-200">denki</p>
        </div>
        <Text className="flex py-12 justify-center font-bold text-white text-6xl">Helping you track your energy usage.</Text>
        <Button className="mb-10 max-w-sm bg-[#3F3E84] hover:bg-purple-600" onClick={() => {
          window.location.replace("/signup")
        }}>
          <Text className="text-white">Get Started</Text>
        </Button>
      </div>
      <div className="flex flex-col items-center font-sans mt-8 p-12">
        <Text className="text-3xl font-semibold text-neutral-700 mb-8">Get real-time information.</Text>
        <Image src="/plugFront.png" alt="plugFront" width="960" height="540"/>
        <Text></Text>
      </div>
    </>
  )
}

export default About
