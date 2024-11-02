'use client'
import React, { useState, useEffect } from "react"
import Image from 'next/image'
import Link from "next/link"

import Nav from "./Nav"
import NavMobile from "./NavMobile"


const Header = () => {
  // const [active, setActive] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // detect scroll
  //     setActive(window.scrollY > 100)
  //   }

  //   // add event listener
  //   window.addEventListener('scroll', handleScroll)

  //   // clear event listener
  //   return() => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <header 
      className={`pt-[27px] pb-[10px] lg:py-6 lg:pt-[16px] lg:pb-[16px] xl:pt-[30px] xl:pb-[30px] fixed top-0 w-full z-50 transition-all duration-200 lg:px-20 bg-black`}
    >
      <div className="mr-[30px] ml-[30px]">
        {/* logo, nav, btn  */}
        <div className="mx-auto flex items-center justify-between">
          {/* logo */}
          <div>
            <Link href='/'>
              <Image src='/logo-apex.svg' width={83} height={40} alt="" className="block lg:hidden" />
              <Image src='/logo-apex.svg' width={93} height={63} alt="" className="hidden lg:block xl:hidden" />
              <Image src='/logo-apex.svg' width={146} height={99} alt="" className="hidden xl:block" />
            </Link>
          </div>
          {/* nav  */}
          <Nav containerStyles='hidden lg:flex gap-x-9 xl:gap-x-14 text-black' linkStyles='capitalize text-white p-2 text-[18px] lg:text-[14px] xl:text-[18px] font-bold hover:scale-110 transition-transform duration-300' />
          {/* mobile nav  */}
          <NavMobile containerStyles='lg:hidden' iconStyles='text-3xl' linkStyles='uppercase text-sm text-white hover:scale-110 transition-transform duration-300' />
          <div className="lg:flex gap-[30px] xl:gap-[42px] justify-center items-center hidden">
            <div>
              <Link href='https://t.me/apexonsol' target="_blank">
                  <Image src='/nav/telegram.png' width={30} height={30} className="hidden lg:flex xl:hidden hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link href='https://t.me/apexonsol' target="_blank">
                  <Image src='/nav/telegram.png' width={47} height={47} className="hidden xl:flex hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative hover:scale-105 transition duration-300 ease-in-out">
              <Link href='https://x.com/apexonsol' target="_blank">
                <button className='text-whiten uppercase drop-shadow-lg justify-center lg:text-[14px] xl:text-[18px] lg:leading-[22px] bg-red hover:bg-redh font-sans font-black py-2 px-10 lg:py-0 xl:py-2 lg:px-8 xl:px-7 flex items-center'>
                    BUY APEX
                </button>
                <div className="absolute bottom-[-10px] left-[-10px]"><Image src='/nav/white-circle.png' width={28} height={28} /></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header