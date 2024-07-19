import Navbar from '../app/ui/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
  <Navbar />
  <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-700">
      <Image
        className="object-cover"
        src="https://images.pexels.com/photos/13919082/pexels-photo-13919082.jpeg"
        alt="Picture of the author"
        layout="fill"
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
    <h1 className="text-6xl text-center mt-6 font-extrabold">
      Hi, I'm <span className="text-orange-500">John Kimani</span>
    </h1>
    <h1 className="text-3xl text-center mt-2 font-bold">
      I'm a <span className="text-orange-500">FullStack Developer</span>
    </h1>
    <h2 className="text-center mt-4 px-4">
      From concept to completion, I provide clean code and pixel-perfect designs for outstanding websites. Proficient in Next.js, React, Flask, and Django, I enhance user engagement with interactive web animations. My experience in customer relationship management ensures that every project is user-centric and impactful.
    </h2>
  </div>
</>

  )
}
