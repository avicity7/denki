'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { app } from '@/utils/firebase'
import { getAuth } from 'firebase/auth'
import { 
  Avatar, 
  Text,
  Stack,
  Show,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent 
} from '@chakra-ui/react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { Icon } from '@iconify-icon/react'

const Navbar = ({currentPage}: any) => { 
  const auth = getAuth(app)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleDrawerOpen = () => { setDrawerOpen(true) }
  const handleDrawerClose = () => { setDrawerOpen(false) }
  return (
    <header className="sticky top-0 z-10 px-2 py-4 bg-white">
      <Show above="lg">
        <div className="flex items-center w-screen flex justify-between py-4">
          <ul className="flex items-center ml-10">
            <li className="flex items-center">
              <Link href="/home" prefetch={true} className="flex items-center">
                <Image src='/denkiLogo.svg' alt='logo' width={28} height={28}/>
                <p className="font-sans text-xl font-extrabold ml-2 text-[#3F3E84]">denki</p>
              </Link>
            </li>

            <li className="flex ml-8">
              <Link href="/home" prefetch={true}>
                  <Text className={"p-2 rounded-full border-radius-xl text-lg font-sans tracking-wide "+(currentPage == "Home" ? "text-[#3F3E84] bg-violet-50 font-semibold" : "text-gray-400 group-hover:text-purple-800")}>home</Text>
              </Link>
            </li>

            <li className="flex ml-6">
              <Link href="/addAppliance" prefetch={true}>
                <Text className={"p-2 rounded-full border-radius-xl text-lg font-sans tracking-wide "+(currentPage == "AddAppliance" ? "text-[#3F3E84] bg-violet-50 font-semibold" : "text-gray-400 group-hover:text-purple-800")}>add appliance</Text>
              </Link>
            </li>


          </ul>
          <Link href={auth.currentUser === null ? "/signup" : "/myAccount"} className="mr-10"> 
            <Avatar size='sm' name={auth?.currentUser?.email as string}/>
          </Link>
        </div>
      </Show>

      <Show below="lg">
        <button onClick={handleDrawerOpen} className="m-4">
          <MenuRoundedIcon />
        </button>
        <Drawer placement={'left'} onClose={handleDrawerClose} isOpen={drawerOpen}>
          <DrawerOverlay />
          <DrawerContent borderRadius="md">
            <DrawerHeader>
              <div className="flex lg:min-w-0 lg:flex-1 align-middle my-4" aria-label="Global">
                <Link href="/" className="-m-1.5 p-1.5">
                <div className='flex justify-center'>
                  <Image src='/denkiLogo.svg' alt='logo' width={28} height={28}/>
                  <p className="font-sans text-xl font-extrabold ml-2 text-[#3F3E84]">denki</p>
                </div>
                </Link>
              </div>
            </DrawerHeader>
            <DrawerBody>
              <Stack>
                <Link href="/home">
                  <div className="flex flex-row items-center font-DMSans">
                    <Icon height="24" icon="akar-icons:map" style={{ color: currentPage === 'Home' ? '#3F3E84' : '#CBCBCB' }} />
                    <Text fontSize='md' className="font-medium text-left pl-2" style={{ color: currentPage === 'Home' ? '#3F3E84' : '#CBCBCB' }}>home</Text>
                    <Text></Text>
                  </div>
                </Link>
                <Link href="/addAppliance">
                  <div className="flex flex-row items-center pt-5 font-DMSans">
                    <Icon height="24" icon="mi:add" style={{ color: currentPage === 'AddAppliance' ? '#3F3E84' : '#CBCBCB' }} />
                    <Text fontSize='md' className="font-medium text-left pl-2" style={{ color: currentPage === 'AddAppliance' ? '#3F3E84' : '#CBCBCB' }}>add appliance</Text>
                    <Text></Text>
                  </div>
                </Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>

      <Show below="lg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-DMSans flex lg:min-w-0 lg:flex-1 align-middle">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className='flex justify-center'>
              <Image src='/denkiLogo.svg' alt='logo' width={28} height={28}/>
            </div>
          </Link>
        </div>
      </Show>
    </header>
  )
}

export default Navbar