import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='rounded-t-3xl bg-gradient-to-r from-sky-950 to-sky-900'>
      <section className='mx-auto max-w-[1440px] text-white'>
        <div className=' grid py-5 md:grid-cols-3'>
          <div className=' px-4 py-8 '>
            <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl'>
              <img src={Logo} alt='' className='w-23 h-10' />
            </h1>
            <p className=''>U-MONSTER-有怪獸企業有限公司。希望以更完整、更值得信賴的專業形象與大家見面。 </p>
            <br />
            <div className='flex items-center gap-3'>
              <FaLocationArrow />
              <p>台中市⻄屯區市政北一路1號3樓</p>
            </div>
            <div className='mt-3 flex items-center gap-3'>
              <FaMobileAlt />
              <p>0900-761-178</p>
            </div>
            {/* Social Handle */}
          </div>
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 '>
            <div className=''>
              <div className='px-4 py-8 '>
                <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>主要項目</h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className='cursor-pointer transition-all duration-300 hover:translate-x-[2px]'>預約課程</li>
                  <li className='cursor-pointer transition-all duration-300 hover:translate-x-[2px]'>諮詢表單</li>
                  <li className='cursor-pointer transition-all duration-300 hover:translate-x-[2px]'>知識專欄</li>
                </ul>
              </div>
            </div>
            <div className=''>
              <div className='px-4 py-8 '>
                <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>其他連結</h1>
                <ul className='flex flex-col gap-3'>
                  <li className='cursor-pointer transition-all duration-300 hover:translate-x-[2px]'>購物商城</li>
                  <li className='cursor-pointer transition-all duration-300 hover:translate-x-[2px]'>會員中心</li>
                </ul>
              </div>
            </div>
            <div className=''>
              <div className='px-4 py-8 '>
                <h1 className='text-justify text-xl font-bold sm:text-left sm:text-xl'>社群連結</h1>
                <div className='flex flex-col gap-3'>
                  <div className='mt-6 flex items-center gap-3'>
                    <a href='#' className='duration-200 hover:scale-105'>
                      <FaInstagram className='text-3xl' />
                    </a>
                    <a href='#' className='duration-200 hover:scale-105'>
                      <FaFacebook className='text-3xl' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='border-t-2 border-gray-300/50 py-6 text-center'>@copyright 2024 U-MONSTER</div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
