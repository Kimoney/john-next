import Navbar from "../ui/navbar"
import Footer from "../ui/footer"
import { MdDeveloperBoard, MdDeveloperMode, MdOutlineRocketLaunch, MdDevicesOther, MdDiamond, MdExplore, MdExtension, MdOutlineMonitorHeart } from "react-icons/md";

export default function Services() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto">
    <div className="m-24">
      <h1 className="text-4xl text-center font-bold"><span className="text-orange-500" >Services</span> I Offer</h1>
    </div>
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
