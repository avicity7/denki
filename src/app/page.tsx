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

      <div className="font-sans">
        <div className="mb-6">
          <Text className="font-bold text-3xl text-gray-700 p-12">Welcome back, User.</Text>
        </div>
        <div className="mx-12">
          <ApplianceCard appliance={{name:'Air Conditioner'}}/>
        </div>
      </div>
    </>
  )
}

export default Home
