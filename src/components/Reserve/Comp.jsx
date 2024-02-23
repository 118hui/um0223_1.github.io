import Card from './Card';
import Img1 from '../../assets/d-1.jpg';
import Img2 from '../../assets/d-2.jpg';
import Img3 from '../../assets/d-3.jpg';

const Data = [
  {
    id: 1,
    image: Img1,
    title: '一對一/團體',
    description: '一直秉持著正向、積極的態度，把正向訓練的精神帶給更多貓家庭與狗家庭。',
    author: 'Someone',
  },
  {
    id: 2,
    image: Img2,
    title: '一對一',
    description: '具備豐富的貓行為與狗行為的專業知識背景。',
    author: 'Someone',
  },
  {
    id: 3,
    image: Img3,
    title: '期間限定',
    description: '盡請把握期間限定優惠的課程，盡請把握期間限定優惠的課程。',
    author: 'Someone',
  },
];

const Comp = () => {
  return (
    <>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14'>
        <section data-aos='fade-up' className='container '>
          <h1 className='my-8  py-2 pl-2 text-3xl font-semibold text-center text-sky-950'>
            培訓課程
            <p data-aos='fade-up' className='text-gray-600 dark:text-gray-400 text-sm my-2'>
              透過不打罵、正面鼓勵的方式讓毛孩們在愛中成長。
            </p>
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {Data.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
          <div className='text-center'>
            <button className='primary-btn'>更多課程</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Comp;
