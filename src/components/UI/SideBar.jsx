import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = ({open, scrollTestimonial, scrollfaqs, scrollpricing, scrollfeautures}) => {
  return (
    <div className='fixed w-full top-0'>
      <div
        className={`text-text menu ${open ? "active" : ""} overflow-hidden`}
      >
      <ul className="flex flex-col leading-[60px] w-full h-full text-lg font-semibold items-center justify-center">
            <li className="cursor-pointer hover:opacity-75" onClick={scrollfeautures}>Features</li>
            <li className="cursor-pointer hover:opacity-75" onClick={scrollpricing}>Pricing</li>
            <li className="cursor-pointer hover:opacity-75" onClick={scrollfaqs}>FAQs</li>
            <li className="cursor-pointer hover:opacity-75" onClick={scrollTestimonial}>Testimonials</li>
            <li>
              <Link to="/signIn">
              <button className="px-8 py-2 bg-secondary rounded-md text-sm hover:bg-opacity-85">
                Sign&nbsp;In
              </button>
              </Link>
            </li>
          </ul>
          </div>
    </div>
  )
}

export default SideBar
