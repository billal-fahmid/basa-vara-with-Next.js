'use client';
import HomeNavbar from './components/HomeNavbar';
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=''>
          <Navbar></Navbar>
          <div className='lg:px-24 md:px-16 sm:px-10 px-5'>
            <div className='flex '>
              <div className='w-[20%] border-r-[1px] border-gray-300'>
              <HomeNavbar></HomeNavbar>
              </div>
              <div className='w-[80%] '> {children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
