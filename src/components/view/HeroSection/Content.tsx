import React from 'react'

const Content = () => {
  return (
    <div className="absolute ml-12 inset-0 p-2 flex items-center justify-start text-white">
    <div className="">
      <h1 className="text-4xl font-bold">Your Text Goes Here</h1>
      <h1 className="mt-4 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
      <h3>Mosdkjfhsd</h3>
      <div className="relative flex mt-4">
        <input
          type="search"
          placeholder='search here'
          className="w-full md:w-96 border border-gray-300 rounded-md py-2 px-4"
        />
        <select
          className="text-black bg-transparent -ml-24"
        >
          <option>Home</option>
          <option>About</option>
          <option>Contact</option>
        </select>
        <button
          className="bg-[#67E776] text-black ml-4 px-[15px] py-[10px] mt-2 md:mt-0"
        >
          Search
        </button>
      </div>
    </div>
  </div>
  )
}

export default Content