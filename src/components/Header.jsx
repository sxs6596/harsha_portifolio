import React from 'react'
import HarshaImg from '../assets/harsha_1.png'

const Header = () => {
  return (
    <div className="container mx-auto rounded-b-2xl bg-header-bg max-w-xl lg:hidden mt-[-7rem] sm:mt-[-7rem]">
      <div className="flex flex-col space-y-2 my-3 items-center justify-center">
        <img src={HarshaImg} alt="Harsha" className="mt-1 w-20"/>
        <h2 className="text-3xl text-center text-slate-700 font-semibold py-1">Siva Sri Harsha Suthapalli</h2>
      </div>
    </div>
  )
}

export default Header
