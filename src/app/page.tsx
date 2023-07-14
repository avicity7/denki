'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Text, Button } from '@chakra-ui/react'
import SettingsIcon from '@mui/icons-material/Settings';
import { app } from "@/utils/firebase"
import { getAuth } from "firebase/auth"

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
        <Text className="flex py-12 justify-center font-bold text-white text-3xl lg:text-6xl mx-12 lg:mx-0">Helping you track your energy usage.</Text>
        <Link className="mb-10 max-w-sm bg-[#3F3E84] hover:bg-purple-600 p-3 rounded-full" href="/signup">
          <Text className="text-white">Get Started</Text>
        </Link>
      </div>
      <div className="flex flex-col items-center font-sans mt-8 p-12">
        <Text className="text-4xl font-semibold text-neutral-700 mb-8">Get real-time information.</Text>
        <Image src="/plugFront.png" alt="plugFront" width="960" height="540"/>
        <Text className="text-xl font-medium text-neutral-600 mt-8">With a Smart Plug, you&apos;ll be able to see exactly how much energy your appliance is using.</Text>
      </div>
      <div className="flex flex-col items-center font-sans mt-8 p-12 bg-[#3F3E84]">
        <Text className="text-4xl font-semibold text-white mb-4">Earn rewards.</Text>
        <Text className="text-xl font-medium text-white mt-8">For every change made towards a greener living, you&apos;ll earn points!</Text>
        <Link className="mt-8 max-w-sm bg-white hover:bg-violet-500 group p-3 rounded-full" href="/signup">
          <Text className="text-[#3F3E84] group-hover:text-white">Get Started</Text>
        </Link>
      </div>
    </>
  )
}

export default About
