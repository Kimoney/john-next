import Navbar from "../ui/navbar"

export default function About() {
  return (
    <>
    <Navbar/>

    {/* Page Heading */}

    <div className="relative">
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 style={{ fontSize: '9rem' }} className="uppercase font-extrabold text-stone-950">About</h1>
      </div>
      <div className="m-24 relative z-10">
        <h1 className="text-4xl text-center font-bold">
          Who is <span className="text-orange-500">Kimani</span>?
        </h1>
        <hr className="w-1/12 h-0.5 mx-auto mt-2 bg-gradient-to-r from-gray-500 via-orange-500 to-gray-500 border-0"/>
      </div>
    </div>
    </>
  )
}
