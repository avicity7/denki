'use client'
import Navbar from "@/src/components/navbar"
import { Input, Text, Button } from "@chakra-ui/react"
import { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../../../utils/firebase"
import { useRouter } from 'next/router'

const Login = () => {
  const auth = getAuth(app)
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  if (auth !== null) {
    router.replace('/home')
  }
  return(
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-left p-12 space-y-4 font-sans content-center">
        <Text className="text-3xl mb-8 font-bold">Login</Text>
        <Text className="font-bold text-lg text-black">Email</Text>
        <Input 
          variant="outline" 
          className="bg-gray-100 focus:bg-white max-w-sm" 
          focusBorderColor="#3F3E84"
          onChange={(e) => {setEmail(e.target.value)}}
        />
        <Text className="font-bold text-lg text-black">Password</Text>
        <Input 
          variant="outline" 
          className="bg-gray-100 focus:bg-white max-w-sm" 
          focusBorderColor="#3F3E84"
          onChange={(e) => {setPassword(e.target.value)}}
        />
        <Button className="max-w-sm bg-[#3F3E84] hover:bg-purple-600" onClick={() => {
          signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            window.location.replace("/")
          })
        }}>
          <Text className="text-white">Log in</Text>
        </Button>
      </div>
    </>
  )
}

export default Login