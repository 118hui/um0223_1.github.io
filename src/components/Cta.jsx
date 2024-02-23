import banner from '../assets/cta1.jpg';
import { NavLink } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='w-full md:h-[400px] h-[460px] my-15 bg-fixed bg-cover relative z-[1]' style={{ backgroundImage: `url(${banner})`, backgroundPosition: 'bottom' }}>
      <div className='w-full h-full md:flex-row flex-col flex items-center justify-center px-10 banner z-[2] md:py-0 py-5 text-center'>
        <span className='text-white md:text-[55px] text-[40px] font-semibold'>快來有怪獸預約課程!</span>
        <div className='flex md:flex-row flex-col items-center gap-10 md:mb-0 mb-2'>
          <NavLink exact to='/course' activeClassName='active' className='nav-links'>
            <button className='w-40 h-12 bg-[#f1a706] cursor-pointer rounded-3xl border-2 border-[#f1a706] shadow-[inset_0px_-2px_0px_1px_#f1a706] group  transition duration-300 ease-in-out m-3'>
              <span className='font-medium text-[#333] group-hover:text-white'>預約課程</span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
