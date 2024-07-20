import Navbar from "../ui/navbar"
import Footer from "../ui/footer"
import { MdDeveloperBoard, MdDeveloperMode, MdOutlineRocketLaunch, MdDevicesOther, MdDiamond, MdExplore, MdExtension, MdOutlineMonitorHeart } from "react-icons/md";

export default function Services() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto">

    {/* Page Heading */}

    <div className="relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="uppercase font-extrabold text-stone-950 whitespace-nowrap text-7xl sm:text-7xl md:text-9xl lg:text-[9rem] xl:text-[9rem]">Services</h1>
        </div>
        <div className="m-4 sm:m-8 md:m-16 lg:m-24 relative z-10">
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-center font-bold">
            What <span className="text-orange-500">I</span> Offer
          </h1>
          <hr className="w-1/6 sm:w-1/6 md:w-1/8 lg:w-1/12 h-0.5 mx-auto mt-1 bg-gradient-to-r from-gray-500 via-orange-500 to-gray-500 border-0"/>
        </div>
      </div>

    {/* Services Cards */}

    <div className="grid grid-cols-2 gap-x-8 gap-y-16">
      
      <div className="bg-gray-900 rounded-lg max-h-64 border-2 border-gray-500">
        <div className="grid grid-cols-4 gap-0 p-4">
          <div className="col-start-1 col-span-1">
            <MdDeveloperBoard className="text-9xl mt-2"/>
          </div>
          <div className="col-start-2 col-span-3">
            <h2 className="text-2xl uppercase font-extrabold text-orange-500 mt-4">Web Development</h2>
            <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus libero neque, lobortis rhoncus turpis dictum quis. Etiam cursus hendrerit ante non sodales.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-lg max-h-64 border-2 border-gray-500">
        <div className="grid grid-cols-4 gap-0 p-4">
          <div className="col-start-1 col-span-1">
            <MdDeveloperMode className="text-9xl mt-2"/>
          </div>
          <div className="col-start-2 col-span-3">
            <h2 className="text-2xl uppercase font-extrabold text-orange-500 mt-4">Web Design</h2>
            <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus libero neque, lobortis rhoncus turpis dictum quis. Etiam cursus hendrerit ante non sodales.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-lg max-h-64 border-2 border-gray-500">
        <div className="grid grid-cols-4 gap-0 p-4">
          <div className="col-start-1 col-span-1">
            <MdOutlineRocketLaunch className="text-9xl mt-2"/>
          </div>
          <div className="col-start-2 col-span-3">
            <h2 className="text-2xl uppercase font-extrabold text-orange-500 mt-4">Maintainance and Support</h2>
            <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus libero neque, lobortis rhoncus turpis dictum quis. Etiam cursus hendrerit ante non sodales.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-lg max-h-64 border-2 border-gray-500">
        <div className="grid grid-cols-4 gap-0 p-4">
          <div className="col-start-1 col-span-1">
            <MdDevicesOther className="text-9xl mt-2"/>
          </div>
          <div className="col-start-2 col-span-3">
            <h2 className="text-2xl uppercase font-extrabold text-orange-500 mt-4">AI Integration</h2>
            <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus libero neque, lobortis rhoncus turpis dictum quis. Etiam cursus hendrerit ante non sodales.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-lg max-h-64 border-2 border-gray-500">
        <div className="grid grid-cols-4 gap-0 p-4">
          <div className="col-start-1 col-span-1">
            <MdDiamond className="text-9xl mt-2"/>
          </div>
          <div className="col-start-2 col-span-3">
            <h2 className="text-2xl uppercase font-extrabold text-orange-500 mt-4">SEO & Performance Optimization</h2>
            <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus libero neque, lobortis rhoncus turpis dictum quis. Etiam cursus hendrerit ante non sodales.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-lg max-h-64 border-2 border-gray-500">
        <div className="grid grid-cols-4 gap-0 p-4">
          <div className="col-start-1 col-span-1">
            <MdExplore className="text-9xl mt-2"/>
          </div>
          <div className="col-start-2 col-span-3">
            <h2 className="text-2xl uppercase font-extrabold text-orange-500 mt-4">Graphic Design</h2>
            <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus libero neque, lobortis rhoncus turpis dictum quis. Etiam cursus hendrerit ante non sodales.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-lg max-h-64 border-2 border-gray-500">
        <div className="grid grid-cols-4 gap-0 p-4">
          <div className="col-start-1 col-span-1">
            <MdExtension className="text-9xl mt-2"/>
          </div>
          <div className="col-start-2 col-span-3">
            <h2 className="text-2xl uppercase font-extrabold text-orange-500 mt-4">Branding Design</h2>
            <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus libero neque, lobortis rhoncus turpis dictum quis. Etiam cursus hendrerit ante non sodales.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-lg max-h-64 border-2 border-gray-500">
        <div className="grid grid-cols-4 gap-0 p-4">
          <div className="col-start-1 col-span-1">
            <MdOutlineMonitorHeart  className="text-9xl mt-2"/>
          </div>
          <div className="col-start-2 col-span-3">
            <h2 className="text-2xl uppercase font-extrabold text-orange-500 mt-4">Web Design</h2>
            <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus libero neque, lobortis rhoncus turpis dictum quis. Etiam cursus hendrerit ante non sodales.
            </p>
          </div>
        </div>
      </div>

    </div>
    </div>
    <Footer/>
    </>
  )
}
