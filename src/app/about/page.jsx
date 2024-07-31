import Navbar from "../ui/navbar"
import Footer from "../ui/footer";
import Image from "next/image"
// import profilePic from '../public/profilePic.jpg'
// import { FiDownload } from 'react-icons/fi';
import { FiDownload } from 'react-icons/fi';
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaFlask } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiJavascript } from 'react-icons/si';


export default function About() {
  const technologies = [
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaFlask />, name: 'Flask' },
    { icon: <FaDatabase />, name: 'SQL' },
    { icon: <FaCss3Alt />, name: 'CSS' },
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiTypescript />, name: 'TypeScript' },
  ];
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

      {/* Left Column: Image and Technologies */}
      <div className="lg:w-1/3 lg:pl-8">
          {/* Image */}
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <Image
                src="/profilePic.jpg" // Replace with your actual image path
                alt="John Kimani's Photo"
                priority
                width={500}
                height={500}
                className="rounded-full border-4 border-orange-500"
              />
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Technologies</h2>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 border border-gray-200 rounded-md shadow-sm">
                  <div className="text-2xl text-orange-500">{tech.icon}</div>
                  <span className="text-lg font-semibold">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Right Column: Text Content */}

        <div className="lg:w-1/2 lg:pr-8">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Hi There! I am <span className="text-orange-500">John Kimani</span>.</h1>
          <h2 className="text-xl lg:text-3xl font-bold mb-4">A Proficient <span className="text-orange-500">Software Developer</span>.</h2>

          <p className="mb-2 text-lg">I am a highly motivated and skilled full-stack developer with a strong focus on creating efficient, scalable, and user-friendly applications.</p>
          <p className="mb-2 text-lg">My expertise spans both front-end and back-end development, allowing me to build complete solutions from concept to deployment.</p>
          {/* <p className="mb-2 text-lg">I am proficient in technologies like JavaScript, React, Node.js, Python, Django, and have experience with modern frameworks such as Next.js.</p> */}
          {/* <p className="mb-2 text-lg">My passion for learning and staying up-to-date with industry trends enables me to continually improve my skills and deliver innovative solutions.</p> */}
          <p className="mb-2 text-lg">I thrive in collaborative environments and am committed to writing clean, maintainable code while ensuring high performance and security standards.</p>
          <p className="mb-6 text-lg"><span className="text-orange-500 font-bold text-xl">Fun Fact: </span>When I am not coding, you can find me as a freedom rider on the open road, where the only bugs I encounter are those that splat against my helmet!</p>

          <div className="mb-4">
            <p className="text-lg"><span className="font-bold text-orange-500 text-xl">Email:</span> john.kimani.muchina@gmail.com</p>
          </div>
          <div className="mb-4">
            <p className="text-lg"><span className="font-bold text-orange-500 text-xl">From:</span> Nairobi, Kenya</p>
          </div>
          <div className="mb-4">
            <p className="text-lg"><span className="font-bold text-orange-500 text-xl">Languages:</span> English, Swahili</p>
          </div>
          <div className="mb-4">
            <p className="text-lg"><span className="font-bold text-orange-500 text-xl">Remote:</span> Available</p>
          </div>
          <div className="mb-4">
            <p className="text-lg"><span className="font-bold text-orange-500 text-xl">Hybrid:</span> Available</p>
          </div>
          <div className="mb-4">
            <p className="text-lg"><span className="font-bold text-orange-500 text-xl">On-Site:</span> Available</p>
          </div>
          <div className="mb-4">
            <p className="text-lg"><span className="font-bold text-orange-500 text-xl">Freelance Contract:</span> Available</p>
          </div>
          <a href="/John-Kimani-Muchina-Software-Engineer-Resume.pdf" download>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            <FiDownload className="inline-block mr-2" /> Download Resume
          </button>
          </a>
        </div>

      </div>

      <Footer/>
    </>
  )
}
