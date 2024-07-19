'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import { FaHouseUser, FaPhone, FaCircleInfo } from "react-icons/fa6";
import { MdCollectionsBookmark, MdEngineering } from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Medium Devices and Above */}
      <div className="hidden md:block sticky top-0 z-50">
        <div className="flex justify-center">
          <button className="bg-opacity-75 inline-block border-solid rounded-2xl border border-gray-700 bg-gray-950 text-xl p-4 mt-6 space-x-12">
            <Link href="/" className={`inline-block hover:text-orange-400 ${pathname === '/' ? 'text-orange-500' : ''}`}> Home</Link>
            <Link href="/services" className={`inline-block hover:text-orange-400 ${pathname === '/services' ? 'text-orange-500' : ''}`}> Services</Link>
            <Link href="/portfolio" className={`inline-block hover:text-orange-400 ${pathname === '/portfolio' ? 'text-orange-500' : ''}`}> Portfolio</Link>
            <Link href="/about" className={`inline-block hover:text-orange-400 ${pathname === '/about' ? 'text-orange-500' : ''}`}> About</Link>
            <Link href="/contact" className={`inline-block hover:text-orange-400 ${pathname === '/contact' ? 'text-orange-500' : ''}`}> Contact</Link>
          </button>
        </div>
      </div>

      {/* Mobile Devices View */}
      <div className="md:hidden sticky top-0 z-50">
        <div className="flex flex-row justify-center">
          <button className="bg-opacity-75 border-solid rounded-2xl border border-gray-700 bg-gray-950 text-xl p-4 mt-6">
            <div className="flex space-x-16">
              <Link href="/" className={`hover:text-orange-400 ${pathname === '/' ? 'text-orange-500' : ''}`}><FaHouseUser /></Link>
              <Link href="/services" className={`hover:text-orange-400 ${pathname === '/services' ? 'text-orange-500' : ''}`}><MdEngineering /></Link>
              <Link href="/portfolio" className={`hover:text-orange-400 ${pathname === '/portfolio' ? 'text-orange-500' : ''}`}><MdCollectionsBookmark /></Link>
              <Link href="/about" className={`hover:text-orange-400 ${pathname === '/about' ? 'text-orange-500' : ''}`}><FaCircleInfo /></Link>
              <Link href="/contact" className={`hover:text-orange-400 ${pathname === '/contact' ? 'text-orange-500' : ''}`}><FaPhone /></Link>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}
