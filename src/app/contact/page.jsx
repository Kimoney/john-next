import Navbar from "../ui/navbar"
import { AiOutlineMail, AiOutlineEnvironment, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'; // Import icons from react-icons


export default function Contact() {
  return (
    <>
    <Navbar/>

    {/* Page Heading */}

    <div className="relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="uppercase font-extrabold text-stone-800 whitespace-nowrap text-7xl sm:text-7xl md:text-9xl lg:text-[9rem] xl:text-[9rem]">Contact</h1>
        </div>
        <div className="m-4 sm:m-8 md:m-16 lg:m-24 relative z-10">
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-center font-bold">
            Hello, let us <span className="text-orange-500">connect</span>
          </h1>
          <hr className="w-1/6 sm:w-1/6 md:w-1/8 lg:w-1/12 h-0.5 mx-auto mt-1 bg-gradient-to-r from-gray-500 via-orange-500 to-gray-500 border-0"/>
        </div>
      </div>

    {/* Body */}

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* Left Side: Contact Form */}
        <div className="p-6 rounded-lg shadow-lg bg-opacity-75 border border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Contact Form</h2>

        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Name */} 
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="mt-1 bg-slate-700 block w-full border border-gray-200 rounded-md sm:text-sm px-3 py-2"
                required
              />

            {/* Last Name */} 
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="mt-1 bg-slate-700 block w-full border border-gray-200 rounded-md sm:text-sm px-3 py-2"
                required
              />
            </div>

          {/* Email Address */}
          
            <div className="flex items-center mt-1">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="mt-1 bg-slate-700 block w-full border border-gray-200 rounded-md sm:text-sm px-3 py-2"
                required
              />
            </div>

          {/* Phone Number */}
  
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 bg-slate-700 block w-full border border-gray-200 rounded-md sm:text-sm px-3 py-2"
                placeholder="Phone number"
                required
              />
  

          {/* Message */}
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 bg-slate-700 block w-full border border-gray-200 rounded-md sm:text-sm px-3 py-2"
              placeholder="Enter Your Message"
              required
            />

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-block px-6 py-3 text-white bg-orange-500 rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>

        {/* Right Side: Contact Details */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
          <div className="mb-4 flex items-center">
            <AiOutlineMail className="text-gray-600 mr-2" size={20} />
            <span>kimani@example.com</span>
          </div>
          <div className="mb-4 flex items-center">
            <AiOutlineEnvironment className="text-gray-600 mr-2" size={20} />
            <span>Nairobi, Kenya</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <AiFillGithub className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <AiFillLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
