import Navbar from "../ui/navbar"
import Footer from "../ui/footer"

export default function Services() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto">
    <div className="m-24">
      <h1 className="text-4xl text-center font-bold"><span className="text-orange-500" >Services</span> I Offer</h1>
    </div>
    <div className="grid grid-cols-2 gap-x-8 gap-y-16">
      <div className="bg-gray-900 rounded-lg min-h-96 border-2 border-gray-500"></div>
      <div className="bg-gray-900 rounded-lg min-h-96 border-2 border-gray-500"></div>
      <div className="bg-gray-900 rounded-lg min-h-96 border-2 border-gray-500"></div>
      <div className="bg-gray-900 rounded-lg min-h-96 border-2 border-gray-500"></div>
      <div className="bg-gray-900 rounded-lg min-h-96 border-2 border-gray-500"></div>
      <div className="bg-gray-900 rounded-lg min-h-96 border-2 border-gray-500"></div>
      <div className="bg-gray-900 rounded-lg min-h-96 border-2 border-gray-500"></div>
      <div className="bg-gray-900 rounded-lg min-h-96 border-2 border-gray-500"></div>
      <div className="bg-gray-900 rounded-lg min-h-96 border-2 border-gray-500"></div>
    </div>
    </div>
    <Footer/>
    </>
  )
}
