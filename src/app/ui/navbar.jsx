'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import { FaHouseUser, FaPhone, FaCircleInfo } from "react-icons/fa6";
import { MdCollectionsBookmark, MdEngineering } from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
    {/* Medium Devices and Above*/}
    <div className="hidden md:block text-center text-2xl pt-4 space-x-12">
    <Link href="/" className={`inline-block md:inline hover:text-orange-400 ${pathname === '/' ? 'text-orange-500' : ''}`}> Home</Link>
    <Link href="/services" className={`inline-block md:inline hover:text-orange-400 ${pathname === '/services' ? 'text-orange-500' : ''}`}> Services</Link>
    <Link href="/portfolio" className={`inline-block md:inline hover:text-orange-400 ${pathname === '/portfolio' ? 'text-orange-500' : ''}`}> Portfolio</Link>
    <Link href="/about" className={`inline-block md:inline hover:text-orange-400 ${pathname === '/about' ? 'text-orange-500' : ''}`}> About</Link>
    <Link href="/contact" className={`inline-block md:inline hover:text-orange-400 ${pathname === '/contact' ? 'text-orange-500' : ''}`}> Contact</Link>
    </div>
    
    {/* Mobile Devices View */}
    
    <div className="md:hidden flex place-content-around text-3xl pt-3 space-x-6">

    <Link className="md:hidden hover:text-orange-400" href="/"> <FaHouseUser/> </Link>
    <Link className="md:hidden hover:text-orange-400" href="/services"> <MdEngineering/> </Link>
    <Link className="md:hidden hover:text-orange-400" href="/portfolio"> <MdCollectionsBookmark/> </Link>
    <Link className="md:hidden hover:text-orange-400" href="/about"> <FaCircleInfo /> </Link>
    <Link className="md:hidden hover:text-orange-400" href="/contact"> <FaPhone/> </Link>
    </div>
    </>
  )
}
