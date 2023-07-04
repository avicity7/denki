'use client'
import Link from 'next/link'
import Image from 'next/image'

import { Avatar, Text } from '@chakra-ui/react'

const Navbar = ({currentPage}: any) => { 
  return (
    <div className="flex items-center w-screen flex justify-between py-4">
      <ul className="flex items-center ml-10">
        <li className="flex items-center">
          <Link href="/" prefetch={true} className="flex items-center">
            <Image src='/denkiLogo.svg' alt='logo' width={28} height={28}/>
            <p className="font-sans text-xl font-extrabold ml-2 text-[#3F3E84]">denki</p>
          </Link>
        </li>

        <li className="flex ml-8">
          <Link href="/" prefetch={true}>
              <Text className={"p-2 rounded-full border-radius-xl text-lg font-sans tracking-wide "+(currentPage == "Home" ? "text-[#3F3E84] bg-violet-50 font-semibold" : "text-gray-400 group-hover:text-purple-800")}>home</Text>
          </Link>
        </li>

        <li className="flex ml-6">
          <Link href="/addAppliance" prefetch={true}>
            <Text className={"p-2 rounded-full border-radius-xl text-lg font-sans tracking-wide "+(currentPage == "AddAppliance" ? "text-[#3F3E84] bg-violet-50 font-semibold" : "text-gray-400 group-hover:text-purple-800")}>add appliance</Text>
          </Link>
        </li>


      </ul>
      <Link href='/myAccount' className="mr-10"> 
        <Avatar size='sm'/>
      </Link>
    </div>
  )
}

export default Navbar