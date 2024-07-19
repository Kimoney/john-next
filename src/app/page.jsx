import Navbar from '../app/ui/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div>
    <Image
      src="https://images.pexels.com/photos/13919082/pexels-photo-13919082.jpeg"
      alt="Picture of the author"
      width={500} 
      height={750}
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
      />
      <h1 className="text-6xl text-center pt-80 font-extrabold">Hi, I'm <span className="text-orange-500">John Kimani</span></h1>
      <h1 className="text-3xl text-center pt-6 font-bold">I'm a <span className="text-orange-500" >FullStack Developer</span></h1>
      <h2 className="text-center">
        From concept to completion, I provide clean code and pixel-perfect designs for outstanding websites. Proficient in Next.js, React, Flask, and Django, I enhance user engagement with interactive web animations. My experience in customer relationship management ensures that every project is user-centric and impactful.
      </h2>
    </div>
    </>
  )
}
