const Forms = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-screen dark'>
        <div className='flex flex-col w-full items-center'>
          <span className='font-semibold text-blue-500'>Inquiry Form</span>
          <span className='font-semibold text-slate-700 text-3xl mt-1'>諮詢表單</span>
        </div>
        <div className='w-full max-w-md bg-sky-900 rounded-lg shadow-md p-6'>
          <h2 className='text-2xl font-bold text-gray-200 mb-4'>基本資料</h2>
          <form className='flex flex-col'>
            <div className='flex space-x-4 mb-4'>
              <input placeholder='手機' className='bg-gray-700 text-white border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' type='text' />
              <input placeholder='LINE ID' className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' type='text' />
            </div>
            <input placeholder='狗 or 貓' className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' type='email' />
            <input placeholder='寵物姓名' className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' type='email' />
            <input placeholder='寵物年紀' className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' type='password' />
            <input placeholder='寵物品種' className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' type='password' />
            <label className='text-sm mb-2 text-gray-200 cursor-pointer' htmlFor='gender'>
              寵物性別
            </label>
            <select className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' id='gender'>
              <option value='male'>請選擇</option>
              <option value='male'>公</option>
              <option value='female'>母</option>
            </select>
            <label className='text-sm mb-2 text-gray-200 cursor-pointer' htmlFor='gender'>
              寵物有無節育
            </label>
            <select className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' id='gender'>
              <option value='male'>請選擇</option>
              <option value='male'>已節育</option>
              <option value='female'>未節育</option>
            </select>
            <label className='text-sm mb-2 text-gray-200 cursor-pointer' htmlFor='age'>
              寵物出生日期
            </label>
            <input className='bg-gray-700 text-gray-200 border-0 rounded-md p-2' id='age' type='date' />
            <button className='bg-gradient-to-r bg-sky-950 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-amber-500 transition ease-in-out duration-150' type='submit'>
              提交表單
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forms;
