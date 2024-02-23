import { useState } from 'react';
import { categories } from '../constants';

import postImage from '../assets/g-1.jpg';
import postImage2 from '../assets/g-2.jpg';
import postImage3 from '../assets/g-3.jpg';

const Course = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategory = (item) => {
    setActiveCategory(item);
  };

  const posts = [
    {
      image: postImage,
      author: 'Amin Najva',
      date: '狗專屬',
      title: 'Most Visited Countries In Last 3 Years',
      description: '',
    },
    {
      image: postImage2,
      author: 'Amin Najva',
      date: '貓專屬',
      title: 'Most Visited Countries In Last 3 Years',
      description: '',
    },
    {
      image: postImage3,
      author: 'Amin Najva',
      date: '期間限定',
      title: 'Most Visited Countries In Last 3 Years',
      description: '',
    },
  ];
  return (
    <div className='flex w-full pb-20 md:px-[200px] px-8 flex-col gap-16 justify-center items-center mt-16'>
      <div className='flex flex-col w-full items-center'>
        <span className='font-semibold text-blue-500'>Book A Course</span>
        <span className='font-semibold text-slate-700 text-3xl mt-1'>預約課程</span>
        <div className='flex flex-col items-center'>
          <div className='flex justify-center items-center px-6 w-[calc(100%-1.5rem)] overflow-auto'>
            {categories.map((item, index) => (
              <div
                className={`group flex items-center justify-center px-8 py-6 min-w-[120px] 
              bg-white rounded-2xl hover:bg-gray-30 [&:is(.active)]:!bg-gray-400 cursor-pointer transition-colors duration-300 ${activeCategory === item ? 'active' : ''}`}
                key={index}
                onClick={() => handleCategory(item)}>
                <p className='text-xl md:text-2xl font-medium text-gray-10 group-hover:text-white group-[.active]:text-white transition-colors duration-300'>{item}</p>
              </div>
            ))}
          </div>
          <div className='flex w-full items-center justify-center md:flex-row flex-col gap-10 mt-12'>
            {posts.map((post) => {
              return (
                <div key={post.title} className='bg-white p-[10px] rounded-[10px]' style={{ boxShadow: '0 0 40px 5px rgb(0 0 0 / 5%)' }}>
                  <img src={post.image} className='w-[400px] h-[270px] rounded-[10px]' alt={post.title} />
                  <div className='flex w-full items-center gap-10 mt-3 px-4'>
                    <div className='flex items-center gap-2'>
                      <span className='text-slate-900 text-[15.5px]'>{post.author}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='text-slate-900 text-[15.5px]'>{post.date}</span>
                    </div>
                  </div>
                  <div className='px-4 py-5 text-[20px] font-semibold text-slate-800'>{post.title}</div>
                  <div className='px-4 leading-7 text-slate-700 max-w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est incidunt quam necessitatibus amet quo aliquid odio eius! Quisquam, error.</div>
                  <div className='font-medium text-blue-600 px-4 py-3 cursor-pointer'>預約課程</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
