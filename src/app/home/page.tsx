'use client'

import Image from 'next/image'
import { Text } from '@chakra-ui/react'
import SettingsIcon from '@mui/icons-material/Settings';

//Component Imports
import ApplianceCard from '../../components/applianceCard'
import Navbar from '../../components/navbar'

const Home = () => {
  return (
    <>
      <Navbar currentPage={"Home"}/>

      <div className="font-sans">
        <div className="mb-6 p-12 justify-between flex">
          <Text className="font-bold text-3xl text-gray-700">At a glance</Text>
          <SettingsIcon className='text-gray-300'/>
        </div>
        <div className="flex mx-12">

        </div>
        <div className="mx-12">
          <ApplianceCard appliance={{name:'Air Conditioner'}}/>
        </div>
      </div>
    </>
  )
}

export default Home
