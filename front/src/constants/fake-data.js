import img_one from 'img/1-74.jpg';
import img_two from 'img/spaceX.jpg';

export const TAGS = [
  {
    id: '1',
    title: "здоров'я",
    createdAt: Date.now().toString()
  },
  {
    id: '2',
    title: 'кіно',
    createdAt: Date.now().toString()
  },
  {
    id: '3',
    title: 'музика',
    createdAt: Date.now().toString()
  },
  {
    id: '4',
    title: 'наука',
    createdAt: Date.now().toString()
  },
  {
    id: '5',
    title: 'технології',
    createdAt: Date.now().toString()
  },
  {
    id: '6',
    title: 'спорт',
    createdAt: Date.now().toString()
  },
  {
    id: '7',
    title: 'мистецтво',
    createdAt: Date.now().toString()
  },
];
export const TAGS_TO_NEWS = [];
export const NEWS = [
  {
    id: '1',
    title: 'Ілон Маск анонсував будівництво Gigafactory 4 у Європі',
    img: img_one,
    author: 'news24',
    createdAt: Date.now().toString(),
    views: 1400,
    featured: true
  }, 
  {
    id: '2',
    title: 'SpaceX запустила у космос 60 супутників',
    img: img_two,
    author: 'news24',
    createdAt: Date.now().toString(),
    views: 2100,
    featured: true
  }
];

