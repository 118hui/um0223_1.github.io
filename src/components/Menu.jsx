import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(false);
  };

  return (
    <div className='fixed top-5 right-10 z-50 p-4'>
      <button className='block focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
        <svg className='w-12 h-12 text-amber-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          {isOpen ? <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' /> : <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />}
        </svg>
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} absolute top-0 right-0 mt-16 bg-sky-900/90 w-[40vh] h-[60vh] shadow-lg p-16 rounded-xl`}>
        <ul className='flex flex-col justify-center items-center'>
          <li>
            <NavLink exact to='/' onClick={handleOnClick} activeClassName='active' className='text-white hover:text-amber-500 text-[35px]'>
              首頁
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/course' onClick={handleOnClick} activeClassName='active' className='text-white hover:text-amber-500 text-[35px]'>
              預約課程
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/forms' onClick={handleOnClick} activeClassName='active' className='text-white hover:text-amber-500 text-[35px]'>
              諮詢表單
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/know' onClick={handleOnClick} activeClassName='active' className='text-white hover:text-amber-500 text-[35px]'>
              知識專欄
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/login' onClick={handleOnClick} activeClassName='active' className='text-white hover:text-amber-500 text-[35px]'>
              會員中心
            </NavLink>
          </li>
        </ul>
        <div className='flex items-center m-3 gap-4 text-white'>
          <FaLocationArrow />
          <p>台中市⻄屯區市政北一路1號3樓</p>
        </div>
        <div className='mt-3 flex items-center m-3 gap-3 text-white'>
          <FaMobileAlt />
          <p>0900-761-178</p>
        </div>
        <div className='mt-6 flex justify-center items-center gap-2'>
          <a href='#' className='duration-200 hover:scale-105 text-white'>
            <FaInstagram className='text-3xl' />
          </a>
          <a href='#' className='duration-200 hover:scale-105 text-white'>
            <FaFacebook className='text-3xl' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
