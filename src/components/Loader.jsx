import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='h-14 w-14 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500' />
    </div>
  )
}

export default Loader
