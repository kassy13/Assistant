import React from 'react';
import loader from '../../assets/Spinner.svg'

const Loader = () => {
  return (
    <div className="fixed left-0 top-[0] h-[100%] flex justify-center items-center w-[100%] bg-black/70 z-[9999]">
      <img src={loader} className='w-[90px]'/>
    </div>
  )
}

export default Loader 
 