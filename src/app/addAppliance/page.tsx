'use client'
import Navbar from "@/src/components/navbar"


import { Text, Input, Button } from "@chakra-ui/react"

const AddAppliance = () => {
  return (
    <>
      <Navbar currentPage={"AddAppliance"}/>

      <div className="flex flex-col justify-center items-center p-12 space-y-6 font-sans content-center">
          <Text className="font-bold text-xl text-black">Add an Appliance</Text>
        <div className='max-w-lg'>
          <Input variant="outline" className="bg-gray-100 focus:bg-white" focusBorderColor="#3F3E84"/>
        </div>
        <Button className="max-w-lg bg-[#3F3E84] hover:bg-purple-600">
          <Text className="text-white">Add Appliance</Text>
        </Button>
      </div>
    </>
  )
}

export default AddAppliance