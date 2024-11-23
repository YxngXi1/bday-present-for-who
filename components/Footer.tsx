import React from 'react'
import HeartCounter from './HeartCounter'

const Footer = () => {
  return (
    <footer className='bg-[#3c4858] flex justify-evenly items-center h-72 text-white title'>
        <div>
            Nathan Tsegaye &copy; 2024
        </div>
        {/* <div>
            <Image
                src='/instagram.webp'
                alt='logo'
                width={50}
                height={50}
                />
        </div> */}
        <div>
            <HeartCounter/>
        </div>
    </footer>
  )
}

export default Footer