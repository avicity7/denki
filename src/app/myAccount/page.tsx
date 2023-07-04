'use client'
import Navbar from "@/src/components/navbar"

import { Avatar, Text } from "@chakra-ui/react"

const MyAccount = () => {
  return(
    <>
      <Navbar currentPage={'MyAccount'} />

      <div className="flex flex-col justify-center items-center p-12 space-y-6 font-sans content-center">
        <Avatar size="lg"/>
        <Text className="font-semibold text-xl mt-3">User</Text>
      </div>
    </>
  )
}

export default MyAccount