import React from 'react'

const Buttons = ({colorSet}) => {
  return (
    <div className='p-4 flex flex-wrap justify-center'>
      <button className='m-3 p-2 pl-5 pr-5 rounded-2xl bg-red-600 text-white shadow-md' onClick={() => colorSet('red')}>Red</button>
      <button className='m-3 p-2 pl-5 pr-5 rounded-2xl bg-green-600 text-white shadow-md' onClick={() => colorSet('green')}>Green</button>
      <button className='m-3 p-2 pl-5 pr-5 rounded-2xl bg-blue-600 text-white shadow-md' onClick={() => colorSet('blue')}>Blue</button>
      <button className='m-3 p-2 pl-5 pr-5 rounded-2xl bg-green-800 text-white shadow-md' onClick={() => colorSet('olive')}>Olive</button>
      <button className='m-3 p-2 pl-5 pr-5 rounded-2xl bg-pink-600 text-white shadow-md' onClick={() => colorSet('pink')}>Pink</button>
      <button className='m-3 p-2 pl-5 pr-5 rounded-2xl bg-yellow-600 text-white shadow-md' onClick={() => colorSet('yellow')}>Yellow</button>
      <button className='m-3 p-2 pl-5 pr-5 rounded-2xl bg-gray-600 text-white shadow-md' onClick={() => colorSet('gray')}>Gray</button>
      <button className='m-3 p-2 pl-5 pr-5 rounded-2xl bg-gray-300 text-black shadow-md' onClick={() => colorSet('lavender')}>Lavender</button>
      <button className='m-3 p-2 pl-5 pr-5 rounded-2xl bg-white text-black shadow-md' onClick={() => colorSet('white')}>White</button>
      <button className='m-3 p-2 pl-5 pr-5 rounded-2xl bg-black text-white shadow-md' onClick={() => colorSet('black')}>Black</button>
    </div>
  )
}

export default Buttons