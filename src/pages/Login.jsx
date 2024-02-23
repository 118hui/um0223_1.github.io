import Logo from '../assets/logo.png';
import Face from '../assets/fb.svg';
import Line from '../assets/line.svg';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
        <div className='relative px-4 py-10 bg-sky-900 mx-8 md:mx-0 shadow rounded-3xl sm:p-10 mt-16'>
          <div className='max-w-md mx-auto'>
            <div className='flex items-center space-x-5 justify-center'>
              <img src={Logo} alt='' className='w-23 h-10' />
            </div>
            <div className='mt-5'>
              <label className='font-semibold text-sm text-white pb-1 block' htmlFor='login'>
                E-mail
              </label>
              <input className='border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full' type='text' id='login' />
              <label className='font-semibold text-sm text-white pb-1 block' htmlFor='password'>
                密碼
              </label>
              <input className='border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full' type='password' id='password' />
            </div>
            <div className='text-right mb-4'>
              <a className='text-xs font-display font-semibold text-white hover:text-gray-600 cursor-pointer' href='#'>
                忘記密碼?
              </a>
            </div>
            <div className='flex justify-center w-full items-center'>
              <div>
                <button className='flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg'>
                  <img src={Face} width='33' height='33' loading='lazy' alt='web design icon' />
                  <span className='ml-2'>使用 Facebook 登入</span>
                </button>
                <button className='flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-4'>
                  <img src={Line} width='33' height='33' loading='lazy' alt='web design icon' />
                  <span className='ml-2'>使用 Line 登入</span>
                </button>
              </div>
            </div>
            <div className='mt-5'>
              <button className='py-2 px-4 bg-sky-950 hover:bg-amber-500 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg' type='submit'>
                登入
              </button>
            </div>
            <div className='flex items-center justify-between mt-4'>
              <span className='w-1/5 border-b dark:border-gray-600 md:w-1/4'></span>
              <NavLink exact to='/register' activeClassName='active' className='text-xs text-white uppercase dark:text-gray-400 hover:underline' href='#'>
                or 註冊
              </NavLink>
              <span className='w-1/5 border-b dark:border-gray-400 md:w-1/4'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
