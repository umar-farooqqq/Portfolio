import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import Link from 'next/link'

const Button = () => {
  return (
    <div>
        <Link href='/projects' ><button className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">
            Projects <Image src={assets.right_arrow_white} alt="" className="w-5" />
        </button></Link>
    </div>
  )
}

export default Button