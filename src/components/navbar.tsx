'use client'
import Link from 'next/link'
import Image from 'next/image'

import { Avatar } from '@chakra-ui/react'

const Navbar = ({currentPage}: any) => { 
  return (
    <div className="w-screen flex justify-between py-6 shadow">
      <ul className="flex items-center ml-10">
        <li className="flex items-center">
          <Image src='/denkiLogo.svg' alt='logo' width={28} height={28}/>
          <p className="font-sans text-xl font-extrabold ml-2 text-[#3F3E84]">denki</p>
          <p className="font-sans text-2xl font-thin ml-3 text-gray-200">|</p>
        </li>

        <li className="flex ml-4">
          <Link href="/" prefetch={true} className={"text-xl font-semibold font-sans tracking-wide "+(currentPage == "Home" ? "text-[#3F3E84]" : "text-gray-400 hover:text-purple-800")}>home</Link>
        </li>

        <li className="flex ml-6">
          <Link href="/addAppliance" prefetch={true} className={"text-xl font-semibold font-sans tracking-wide "+(currentPage == "AddAppliance" ? "text-[#3F3E84]" : "text-gray-400 hover:text-purple-800")}>add appliance</Link>
        </li>


      </ul>
      <Link href='/myAccount' className="mr-10"> 
        <Avatar size='sm'/>
      </Link>
    </div>
  )
}

export default Navbar