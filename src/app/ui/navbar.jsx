'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import { FaHouseUser, FaPhone, FaCircleInfo } from "react-icons/fa6";
import { MdCollectionsBookmark, MdEngineering } from "react-icons/md";
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Medium Devices and Above */}
      <div className="hidden md:block sticky top-0 z-50">
        <div className="flex justify-center">
          <button className="bg-opacity-75 inline-block border-solid rounded-2xl border border-gray-700 bg-gray-950 text-xl p-4 mt-6 space-x-12">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-block"
              >
                <Link href={link.href} className={`hover:text-orange-400 ${pathname === link.href ? 'text-orange-500' : ''}`}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Devices View */}
      <div className="md:hidden sticky top-0 z-50">
        <div className="flex flex-row justify-center">
          <button className="bg-opacity-75 border-solid rounded-2xl border border-gray-700 bg-gray-950 text-xl p-4 mt-6">
            <div className="flex space-x-16">
              {[
                { href: "/", icon: <FaHouseUser /> },
                { href: "/services", icon: <MdEngineering /> },
                { href: "/portfolio", icon: <MdCollectionsBookmark /> },
                { href: "/about", icon: <FaCircleInfo /> },
                { href: "/contact", icon: <FaPhone /> },
              ].map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="md:hidden"
                >
                  <Link href={link.href} className={`hover:text-orange-400 ${pathname === link.href ? 'text-orange-500' : ''}`}>
                    {link.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </button>
        </div>
      </div>
    </>
  )
}