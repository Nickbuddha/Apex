import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const SocialIcons = () => {
  return (
    <div>
        <div className='flex gap-[16px] px-5 lg:hidden  xl:flex'>
            <Link href='/'>
                <Image src='/social-icons/twitter.png' width={57} height={57} alt=""  className='hover:scale-110 transition-transform duration-300'/>
            </Link>
            <Link href='https://t.me/apexonsol' target="_blank">
                <Image src='/social-icons/telegram.png' width={54} height={54} alt="" className='hover:scale-110 transition-transform duration-300' />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/A6.png' width={59} height={59} alt="" className='hover:scale-110 transition-transform duration-300' />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/A2.png' width={59} height={59} alt="" className='hover:scale-110 transition-transform duration-300' />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/A3.png' width={59} height={59} alt="" className='hover:scale-110 transition-transform duration-300' />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/A7.png' width={59} height={59} alt="" className='hover:scale-110 transition-transform duration-300'/>
            </Link>
        </div>
        <div className='gap-[16px] hidden lg:flex xl:hidden'>
            <Link href='/'>
                <Image src='/social-icons/twitter.png' width={36} height={36} alt=""  className='hover:scale-110 transition-transform duration-300'/>
            </Link>
            <Link href='https://t.me/apexonsol' target="_blank">
                <Image src='/social-icons/telegram.png' width={33} height={33} alt="" className='hover:scale-110 transition-transform duration-300' />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/A6.png' width={38} height={38} alt="" className='hover:scale-110 transition-transform duration-300' />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/A2.png' width={38} height={38} alt=""  className='hover:scale-110 transition-transform duration-300'/>
            </Link>
            <Link href='/'>
                <Image src='/social-icons/A3.png' width={38} height={38} alt="" className='hover:scale-110 transition-transform duration-300' />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/A7.png' width={38} height={38} alt="" className='hover:scale-110 transition-transform duration-300'/>
            </Link>
        </div>
    </div>
  )
}

export default SocialIcons