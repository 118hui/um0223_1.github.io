//import { CalendarOutline, PersonOutline } from 'react-ionicons';
import postImage from '../assets/g-1.jpg';
import postImage2 from '../assets/g-2.jpg';
import postImage3 from '../assets/g-3.jpg';

const Blog = () => {
  const posts = [
    {
      image: postImage,
      author: 'Amin Najva',
      date: 'Nov 15, 2023',
      title: 'Most Visited Countries In Last 3 Years',
      description: '',
    },
    {
      image: postImage2,
      author: 'Amin Najva',
      date: 'Nov 15, 2023',
      title: 'Most Visited Countries In Last 3 Years',
      description: '',
    },
    {
      image: postImage3,
      author: 'Amin Najva',
      date: 'Nov 15, 2023',
      title: 'Most Visited Countries In Last 3 Years',
      description: '',
    },
  ];

  return (
    <div className='flex w-full pb-20 md:px-[200px] px-8 flex-col gap-16 justify-center items-center mt-16'>
      <div className='flex flex-col w-full items-center'>
        <span className='font-semibold text-blue-500'>KNOWLEDGE COLUMN</span>
        <span className='font-semibold text-slate-700 text-3xl mt-1'>知識專欄</span>
      </div>
      <div className='flex w-full items-center justify-center md:flex-row flex-col gap-8'>
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
              <div className='font-medium text-blue-600 px-4 py-3 cursor-pointer'>更多資訊</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
