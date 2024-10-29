import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const SocialIcons = () => {
  return (
    <div>
        <div className='flex gap-[16px] lg:hidden xl:flex'>
            <Link href='/'>
                <Image src='/social-icons/twitter.png' width={59} height={59} alt=""  />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/telegram.png' width={59} height={59} alt=""  />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/A6.png' width={59} height={59} alt=""  />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/A2.png' width={59} height={59} alt=""  />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/A3.png' width={59} height={59} alt=""  />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/A7.png' width={59} height={59} alt="" />
            </Link>
        </div>
        <div className='gap-[16px] hidden lg:flex xl:hidden'>
            <Link href='/'>
                <Image src='/social-icons/twitter.png' width={38} height={38} alt=""  />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/telegram.png' width={38} height={38} alt=""  />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/A6.png' width={38} height={38} alt=""  />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/A2.png' width={38} height={38} alt=""  />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/A3.png' width={38} height={38} alt=""  />
            </Link>
            <Link href='/'>
                <Image src='/social-icons/A7.png' width={38} height={38} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default SocialIcons