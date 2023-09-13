import Image from 'next/image'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaBasketballBall, FaReact, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { TbBrandNextjs, TbBrandRadixUi } from 'react-icons/tb'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const EnterCard = () => {
  return (
    <div className='flex flex-col h-screen'>

      <header className='bg-[#1D1D22] py-6 px-20'>
        <div className='flex justify-between items-center'>
          <h3 className='text-white cursor-pointer'>Abo Ghanbari</h3>
          <div className='flex flex-row justify-between cursor-pointer'>
            <FaBasketballBall size={20} color='white' className='text-white mr-5 bg-gray-900' />
            <FaInstagram size={20} color='white' className='text-white mr-5' />
            <FaTwitter size={20} color='white' className='text-white mr-5' />
            <FaLinkedin size={20} color='white' className='text-white mr-5' />
          </div>
        </div>
      </header>

      <div className='bg-[#1D1D22] px-5 md:px-20 py-3'><h1 className=' text-xl text-gray-200 md:text-8xl'>LANDING PAGE</h1></div>

      <main className='flex-1 bg-[#1D1D22] py-6 px-20'>
        <div className='my-10 flex flex-row h-2/3 justify-center items-center'>
          <div className='px-20 w-full'>
            <h2 className='text-white text-xl md:text-5xl pb-4 w-full'>Please enter password to view</h2>
            <h2 className='text-gray-400 text-2xl md:text-4xl pb-4'>My Portfolio</h2>
            <div className='flex flex-row justify-start'>
              <Input placeholder="enter your email" type="email" color="" className="z-30 placeholder-white border-none placeholder-transparent bg-gray-800 text-white w-1/2 rounded-t-lg" />
              <Button className="bg-white text-black rounded-lg z-40">Let's go</Button>
            </div>
            <div className='my-5 flex flex-row'>
              <h4 className='text-gray-100'>You want the password?</h4>
              <Button variant="link" className="text-white underline -mt-2">request password</Button>
            </div>
          </div>
          {/* Use the hidden class for small screens and md:flex for medium screens and above */}
          <div className='hidden md:flex md:flex-none  absolute top-20 right-20'>
            <Image src="/padlockc.png" width={500} height={600} className='md:block' />
          </div>
        </div>
      </main>

      <footer className='py-3 px-20 w-full bg-black text-white'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col justify-start'>
            <h2 className='text-white'> Built by Isaac Kinyanjui</h2>
            <h3>Contact me on: </h3>
            <div className='flex flex-row'><AiOutlineMail size={20} color='white' className='text-white mr-5'/> <Button variant='link' className="-ml-8 -mt-3 text-white underline">Email</Button></div>
            <div className='flex flex-row'><FiPhoneCall size={20} color='white' className='text-white mr-5'/> <Button variant='link' className="-mt-3 -ml-8 text-white underline">Phone</Button></div>
          </div>
          <div className='flex flex-col justify-end'>
            <h3>Tech Stack Used</h3>
            <li className='list-none'>
              <div className='flex flex-row'><TbBrandNextjs size={20} color='white' className='text-white mr-5' /> <ul className='underline  list-disc list-inside'>NextJS</ul></div>
              <div className='flex flex-row'><BiLogoTailwindCss size={20} color='white' className='text-white mr-5' /> <ul className='underline  list-disc list-inside'>TailwindCSS</ul></div>
              <div className='flex flex-row'><TbBrandRadixUi size={20} color='white' className='text-white mr-5' /> <ul className='underline  list-disc list-inside'>RadixUI</ul></div>
              <div className='flex flex-row'><FaReact size={20} color='white' className='text-white mr-5' /> <ul className='underline  list-disc list-inside'>React</ul></div>
            </li>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default EnterCard
