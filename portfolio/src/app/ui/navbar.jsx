import Link from "next/link"
import { Home, Briefcase, Users, Info, Mail } from "react-feather";

export default function Navbar() {
  return (
    <>
    {/* Medium Devices and Above*/}
    <div className="hidden md:block text-center text-lg font-semibold space-x-12">
    <Link className="inline-block md:inline" href="/"> Home</Link>
    <Link className="inline-block md:inline" href="/services"> Services</Link>
    <Link className="inline-block md:inline" href="/portfolio"> Portfolio</Link>
    <Link className="inline-block md:inline" href="/about"> About</Link>
    <Link className="inline-block md:inline" href="/contact"> Contact</Link>
    </div>
    
    {/* Mobile Devices View */}
    
    <div className="md:hidden flex place-content-around space-x-6">

    <Link className="md:hidden" href="/"> <Home/> </Link>
    <Link className="md:hidden" href="/services"> <Briefcase/> </Link>
    <Link className="md:hidden" href="/portfolio"> <Users/> </Link>
    <Link className="md:hidden" href="/about"> <Info/> </Link>
    <Link className="md:hidden" href="/contact"> <Mail/> </Link>
    </div>
    </>
  )
}
