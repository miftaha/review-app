import { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'

import people from './data'
function App() {
  const [index, setIndex] = useState(0)
  const { image, name, job, text } = people[index]

  const handleNextRev = () => {
    setIndex((oldIndex) => {
      const nextIndex = oldIndex + 1
      if (nextIndex > people.length - 1) {
        return 0
      }
      return nextIndex
    })
  }
  const handlePrevRev = () => {
    setIndex((oldIndex) => {
      const newIndex = oldIndex - 1
      if (newIndex < 0) {
        return people.length - 1
      }
      return newIndex
    })
  }

  return (
    <main className="bg-gray-700 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-[600px] text-center bg-white p-6 rounded-md shadow-lg">
        <div className="mb-3">
          <img
            src={image}
            className="w-40 h-40 rounded-full object-cover mx-auto"
          />
        </div>

        <div className="mb-3">
          <h2 className="font-semibold capitalize">{name}</h2>
          <h3 className="font-medium tracking-wide uppercase text-blue-500">
            {job}
          </h3>
          <p>{text}</p>
        </div>

        <div className="mb-3 text-blue-400 hover:text-blue-800">
          <button onClick={handlePrevRev} className="mx-3">
            <FaChevronLeft />
          </button>
          <button onClick={handleNextRev} className="mx-3">
            <FaChevronRight />
          </button>
        </div>
        <button className="capitalize bg-gray-400 text-blue-700 px-4 py-2 hover:underline rounded-md">
          surprise me
        </button>
      </div>
    </main>
  )
}

export default App
