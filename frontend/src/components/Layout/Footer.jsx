import React from 'react'
import Logo from '../../Assests/logo_2.png'
import { Link } from 'react-router-dom'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { footerProductLinks, footerSupportLinks, footercompanyLinks } from '../../static/data'
import Payment from '../../Assests/payment.png'

const Footer = () => {

  return (
    <div className='bg-[#212121] text-white'>
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#212121] py-7 border-b-2 border-gray-500">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#f17979]">
            Subscribe 
          </span> to get newsletters <br /> deals and offers
        </h1>
        <div>
          <input type="text" placeholder='Enter your email'
          className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none' />
          <button className="bg-[#f17979] hover:bg-[#e16e6e] duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img src={Logo} alt="Logo" style={{filter: "brightness(0) invert(1)" }} className='w-[12rem]'/>
          <br />
          <p>The home and elements needed to create beautiful products</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className='cursor-pointer' />
            <AiOutlineTwitter size={25} className='cursor-pointer' style={{marginLeft : "15px"}} />
            <AiFillInstagram size={25} className='cursor-pointer' style={{marginLeft : "15px"}} />
            <AiFillYoutube size={25} className='cursor-pointer' style={{marginLeft : "15px"}} />
          </div>
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold border-b-2 border-[#f17979]">Company</h1>
          {
            footercompanyLinks.map((link) => {
              return (
                <li key={link.name}>
                  <Link to={link.link} className='text-gray-400 hover:text-[#f17979] duration-300 text-sm cursor-pointer leading-6'>
                    {link.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold border-b-2 border-[#f17979] ">Shop</h1>
          {
            footercompanyLinks.map((link) => {
              return (
                <li key={link.name}>
                  <Link to={link.link} className='text-gray-400 hover:text-[#f17979] duration-300 text-sm cursor-pointer leading-6'>
                    {link.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold border-b-2 border-[#f17979]">Support</h1>
          {
            footerSupportLinks.map((link) => {
              return (
                <li key={link.name}>
                  <Link to={link.link} className='text-gray-400 hover:text-[#f17979] duration-300 text-sm cursor-pointer leading-6'>
                    {link.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
        
      </div>
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
          <span>&copy; 2023 Ransboak. All rights reserved</span>
          <span>Terms & Privacy Policy</span>
          <div className="sm-block flex items-center justify-center w-full">
          <img src={Payment} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Footer