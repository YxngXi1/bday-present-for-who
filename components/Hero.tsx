import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='min-h-screen flex justify-center items-center'>
        <div className='min-h-screen container '>
            <div className='min-h-screen flex justify-center flex-col lg:flex-row'>
                <div className='mx-auto flex justify-center items-center w-5/12'>
                    <Image src='/nathantsegaye.png' width={300} height={300} className='rounded-lg' alt='profile' />
                </div>
                <div className='mx-auto  w-7/12 flex flex-col justify-center items-start'>
                    <div className='ml-2'>
                        <h1 className='title mb-4'>Nathan Tsegaye</h1>
                        <p className='subtitle mb-8'>High School Student</p>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-y-2 gap-x-10'>
                        <button className='px-10 py-4'>Resume</button>
                        <button className='px-10 py-4'>Transcript</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero