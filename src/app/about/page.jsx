import Navbar from "../ui/navbar"
import Footer from "../ui/footer";
import Image from "next/image"
// import profilePic from '../public/profilePic.jpg'
import { FiDownload } from 'react-icons/fi';


export default function About() {
  return (
    <>
    <Navbar/>

    {/* Page Heading */}
    <div className="relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="uppercase font-extrabold text-stone-800 whitespace-nowrap text-7xl sm:text-7xl md:text-9xl lg:text-[9rem] xl:text-[9rem]">About</h1>
        </div>
        <div className="m-4 sm:m-8 md:m-16 lg:m-24 relative z-10">
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-center font-bold">
            Who is <span className="text-orange-500">Kimani</span>?
          </h1>
          <hr className="w-1/6 sm:w-1/6 md:w-1/8 lg:w-1/12 h-0.5 mx-auto mt-1 bg-gradient-to-r from-gray-500 via-orange-500 to-gray-500 border-0"/>
        </div>
      </div>

      {/* Body */}

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0">

      {/* Left Column: Image */}

        <div className="lg:w-1/2 lg:pl-8 flex justify-center">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            <Image
              src="/profilePic.jpg" // Replace with your actual image path
              alt="John Kimani's Photo"
              priority
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Right Column: Text Content */}

        <div className="lg:w-1/2 lg:pr-8">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Hi There! I am John Kimani</h1>
          <h2 className="text-xl lg:text-3xl font-bold mb-4">Software Developer</h2>
          <p className="text-gray-700 mb-4">
            I am a Visual Designer with a strong focus on digital branding. Visual design seeks to attract, inspire, create desires, and motivate people to respond to messages, with a view to making a favorable impact.
          </p>
          <div className="mb-4">
            <p className="font-bold">Email:</p>
            <p>devis@example.com</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">From:</p>
            <p>2661 Hich Meadow Lane, Bear Creek</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Language:</p>
            <p>English</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Remote:</p>
            <p>Available</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Hybrid:</p>
            <p>Available</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">On-Site:</p>
            <p>Available</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Freelance:</p>
            <p>Available</p>
          </div>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            <FiDownload className="inline-block mr-2" /> Download Resume
          </button>
        </div>

      </div>

      <Footer/>
    </>
  )
}
