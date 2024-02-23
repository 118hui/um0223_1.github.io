import course01 from './assets/course-01.png';
import course02 from './assets/course-02.png';
import course03 from './assets/course-03.png';
import course04 from './assets/course-04.png';
import course05 from './assets/course-05.png';
import course06 from './assets/course-06.png';
import course07 from './assets/course-07.png';

import instructor01 from './assets/instructor-01.png';
import instructor02 from './assets/instructor-02.png';
import instructor03 from './assets/instructor-03.png';
import instructor04 from './assets/instructor-04.png';
import instructor05 from './assets/instructor-05.png';
import instructor06 from './assets/instructor-06.png';
import instructor07 from './assets/instructor-07.png';

export const categories = ['全部', '一對一', '安心住宿', '到府照顧', '期間限定'];

export const courses = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    category: 'Technology',
    difficulty: 'Beginner',
    thumbnail: course01,
    instructor: {
      name: 'Sarah Johnson',
      pic: instructor01,
    },
    rating: 4.7,
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    category: 'Technology',
    difficulty: 'Intermediate',
    thumbnail: course02,
    instructor: {
      name: 'Michael Chen',
      pic: instructor02,
    },
    rating: 4.9,
  },
  {
    id: 3,
    title: 'Digital Marketing Mastery',
    category: 'Marketing',
    difficulty: 'Advanced',
    thumbnail: course03,
    instructor: {
      name: 'Emily Davis',
      pic: instructor03,
    },
    rating: 4.8,
  },
  {
    id: 4,
    title: 'Art of Photography',
    category: 'Arts',
    difficulty: 'Beginner',
    thumbnail: course04,
    instructor: {
      name: 'James Anderson',
      pic: instructor04,
    },
    rating: 4.6,
  },
  {
    id: 5,
    title: 'Entrepreneurship Bootcamp',
    category: 'Business',
    difficulty: 'Intermediate',
    thumbnail: course05,
    instructor: {
      name: 'Mark Roberts',
      pic: instructor05,
    },
    rating: 4.7,
  },
  {
    id: 6,
    title: 'Content Marketing Strategy',
    category: 'Marketing',
    difficulty: 'Intermediate',
    thumbnail: course06,
    instructor: {
      name: 'Laura Williams',
      pic: instructor06,
    },
    rating: 4.8,
  },
  {
    id: 7,
    title: 'Machine Learning for Beginners',
    category: 'Technology',
    difficulty: 'Beginner',
    thumbnail: course07,
    instructor: {
      name: 'Maria Rodriguez',
      pic: instructor07,
    },
    rating: 4.9,
  },
];
