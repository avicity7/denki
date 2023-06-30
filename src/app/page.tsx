'use client'

import Image from 'next/image'
import { Text } from '@chakra-ui/react'

//Component Imports
import ApplianceCard from '../components/applianceCard'
import Navbar from '../components/navbar'

const Home = () => {
  return (
    <>
      <Navbar currentPage={"Home"}/>

      <div className="mx-12 mt-3 bg-white font-sans">
        <div className="flex flex-col justify-center items-center">
          <Text className="font-bold text-3xl mb-6">Welcome back, User.</Text>
        </div>
        <div>
          <ApplianceCard appliance={{name:'Air Conditioner'}}/>
        </div>
      </div>
    </>
  )
}

export default Home
