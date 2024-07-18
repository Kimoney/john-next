import Link from "next/link"
import { FaHouseUser, FaPhone, FaCircleInfo } from "react-icons/fa6";
import { MdCollectionsBookmark, MdEngineering } from "react-icons/md";

export default function Navbar() {
  return (
    <>
    {/* Medium Devices and Above*/}
    <div className="hidden md:block text-center text-2xl pt-4 space-x-12">
    <Link className="inline-block md:inline hover:text-orange-400" href="/"> Home</Link>
    <Link className="inline-block md:inline hover:text-orange-400" href="/services"> Services</Link>
    <Link className="inline-block md:inline hover:text-orange-400" href="/portfolio"> Portfolio</Link>
    <Link className="inline-block md:inline hover:text-orange-400" href="/about"> About</Link>
    <Link className="inline-block md:inline hover:text-orange-400" href="/contact"> Contact</Link>
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
