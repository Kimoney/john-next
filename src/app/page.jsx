import Navbar from '../app/ui/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
  <Navbar />
  <div className="flex flex-col items-center justify-center min-h-screen px-4">
    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-orange-500 -mt-56">
      <Image
        className="object-cover"
        src="https://images.pexels.com/photos/13919082/pexels-photo-13919082.jpeg"
        alt="Picture of the author"
        layout="fill"
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
    <div className="text-left mt-16">
      <h1 className="text-4xl md:text-6xl font-extrabold">
        Hi, I am <span className="text-orange-500">John Kimani</span>.
      </h1>
      <h1 className="text-2xl md:text-3xl mt-6 font-bold">
        A seasoned <span className="text-orange-500">FullStack Developer</span>.
      </h1>
      <h2 className="text-base md:text-lg mt-6 px-2">
        From concept to completion, I provide clean code and pixel-perfect designs for outstanding websites.
        <br />
        My experience in customer relationship management ensures that every project is <span className="text-orange-500 font-bold">user-centric</span> and <span className="text-orange-500 font-bold">impactful</span>.
      </h2>
    </div>
  </div>
</>

  )
}
