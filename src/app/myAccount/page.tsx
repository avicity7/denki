'use client'
import Navbar from "@/src/components/navbar"
import { getAuth } from "firebase/auth"
import { app } from "../../../utils/firebase"
import { Avatar, Text } from "@chakra-ui/react"


const MyAccount = () => {
  const auth = getAuth(app)
  if (auth.currentUser === null) {
    window.location.replace("/signup")
  }

  return(
    <>
      <Navbar currentPage={'MyAccount'} />

      <div className="flex flex-col justify-center items-center p-12 space-y-6 font-sans content-center">
        <Avatar size="lg" name={auth?.currentUser?.email as string}/>
        <Text className="font-semibold text-xl mt-3">{auth?.currentUser?.email}</Text>
      </div>
    </>
  )
}

export default MyAccount