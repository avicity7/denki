'use client'
import Navbar from "@/src/components/navbar"
import { Input, Text, Button } from "@chakra-ui/react"
import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from "@/utils/firebase"

const SignUp = () => {
  const auth = getAuth(app)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return(
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-left p-12 space-y-4 font-sans content-center">
        <Text className="text-3xl mb-8 font-bold">Sign Up</Text>
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
        <button onClick={() => {
          window.location.replace("/login")
        }}>
          <Text className="max-w-sm text-sm text-blue-400 hover:text-blue-600">Already have an account? Sign in</Text>
        </button>
        <Button className="max-w-sm bg-[#3F3E84] hover:bg-purple-600" onClick={() => {
          createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            window.location.replace("/login")
          })
        }}>
          <Text className="text-white">Sign Up</Text>
        </Button>
      </div>
    </>
  )
}

export default SignUp