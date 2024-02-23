import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-screen dark'>
        <div className='w-full max-w-md bg-sky-900 rounded-lg shadow-md p-6'>
          <h2 className='text-2xl font-bold text-gray-200 mb-4'>註冊</h2>
          <form className='flex flex-col'>
            <div className='flex space-x-4 mb-4'>
              <input placeholder='姓名' className='bg-gray-700 text-white border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' type='text' />
              <input placeholder='名子' className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' type='text' />
            </div>
            <input placeholder='Email' className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' type='email' />
            <input placeholder='再輸入 Email' className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' type='email' />
            <input placeholder='密碼' className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' type='password' />
            <input placeholder='再輸入密碼' className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' type='password' />
            <input placeholder='手機' className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' type='email' />
            <label className='text-sm mb-2 text-gray-200 cursor-pointer' htmlFor='gender'>
              性別
            </label>
            <select className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' id='gender'>
              <option value='male'>男</option>
              <option value='female'>女</option>
              <option value='other'>其他</option>
            </select>
            <label className='text-sm mb-2 text-gray-200 cursor-pointer' htmlFor='age'>
              出生日期
            </label>
            <input className='bg-gray-700 text-gray-200 border-0 rounded-md p-2' id='age' type='date' />
            <p className='text-white mt-4'>
              已經有帳戶了?
              <NavLink exact to='/login' activeClassName='active' className='m-3 text-sm text-blue-500 hover:underline mt-4' href='#'>
                登入
              </NavLink>
            </p>
            <button className='bg-gradient-to-r bg-sky-950 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-amber-500 transition ease-in-out duration-150' type='submit'>
              註冊
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
