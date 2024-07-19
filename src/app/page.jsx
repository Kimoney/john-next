'use client'

import { motion } from 'framer-motion'
import Navbar from '../app/ui/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-orange-500 -mt-56"
          initial={{ opacity: 0, y: 50 }} // Start from 50px below
          animate={{ opacity: 1, y: 0 }} // Animate to original position
          transition={{ duration: 0.1 }} // Duration of the animation
        >
          <Image
            className="object-cover"
            src="https://images.pexels.com/photos/13919082/pexels-photo-13919082.jpeg"
            alt="Picture of the author"
            layout="fill"
          />
        </motion.div>
        <div className="text-left mt-12">
          <motion.h1
          className="text-4xl md:text-6xl font-extrabold"
          initial={{ opacity: 0, y: 50 }} // Start from 50px below
          animate={{ opacity: 1, y: 0 }} // Animate to original position
          transition={{ duration: 0.4, delay: 0.2 }} // Duration and delay of the animation
          >
            Hi, I am <span className="text-orange-500">John Kimani</span>.
          </motion.h1>
          <motion.h1
          className="text-2xl md:text-3xl mt-4 font-bold"
          initial={{ opacity: 0, y: 50 }} // Start from 50px below
          animate={{ opacity: 1, y: 0 }} // Animate to original position
          transition={{ duration: 0.4, delay: 0.7 }} // Duration and delay of the animation
          >
            A seasoned <span className="text-orange-500">FullStack Developer</span>.
          </motion.h1>
          <motion.h2
          className="text-base md:text-lg mt-4"
          initial={{ opacity: 0, y: 50 }} // Start from 50px below
          animate={{ opacity: 1, y: 0 }} // Animate to original position
          transition={{ duration: 0.4, delay: 1.2 }} // Duration and delay of the animation
          >
            From concept to completion, I provide clean code and pixel-perfect designs for outstanding websites.
            <br />
            My experience in customer relationship management ensures that every project is <span className="text-orange-500 font-bold">user-centric</span> and <span className="text-orange-500 font-bold">impactful</span>.
          </motion.h2>
        </div>
      </div>
    </>

  )
}
