import one from 'img/1';
import two from 'img/2';
import three from 'img/3';
import four from 'img/4';
import five from 'img/5';
import six from 'img/6';
import seven from 'img/7';

import moment from 'moment';

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
    text: 'aмериканська компанія Tesla побудує перший у Європі завод Gigafactory 4 в околицях Берліна.Про це розповів гендиректор Tesla Ілон Маск на своїй сторінці у Twitter. За словами Маска, європейська Gigafactory 4 буде випускати батареї, двигуни та електромобілі, серед яких — Model Y.',
    img: one,
    important: false,
    author: 'news24',
    category: 'наука',
    createdAt: moment().locale('uk-ua').format('lll').toString(),
    views: 1400,
  },
  {
    id: '2',
    title: 'SpaceX запустила у космос 60 супутників',
    text: 'SpaceX запустила ракету із 60 супутниками Starlink зі стартового комплексу Space Launch Complex 40 на космодрому на мисі Канаверал. «Успішне розгортання 60 супутників Starlink офіційно підтверджено», — зазначили у компанії.',
    img: two,
    important: true,
    author: 'news24',
    category: 'світ',
    createdAt: moment().locale('uk-ua').format('lll').toString(),
    views: 2100,
  },
  {
    id: '3',
    title: 'Сіквел «Джокера» офіційно запустили у виробництво',
    text: 'Warner Bros. і DC запустили в роботу сиквел “Джокера”. Очікується, що Тодд Філліпс повернеться як режисер, він хоче знову працювати з Хоакіном Феніксом. Ще одна ідея режисера – розширити портфоліо оригінальних коміксових фільмів у кіностудії. Наприклад, режисерові цікаві Оріджін інших лиходіїв всесвіту Бетмена – наприклад, Лекса Лютора, пише HTR.',
    img: three,
    important: false,
    author: 'news24',
    category: 'культура',
    createdAt: moment().locale('uk-ua').format('lll').toString(),
    views: 2400,
  },
  {
    id: '4',
    title: 'Серіал «Відьмак» подовжили на другий сезон',
    text: 'серіал «Відьмак» за місяць до прем’єри вирішили продовжити на другий сезон. «Пригоди Геральта тільки починаються … “Відьмака” продовжили на другий сезон!», — йдеться у повідомленні Netflix на Twitter. Зйомки восьми нових серій почнуться в Лондоні на початку 2020 року, повідомляє Variety. Прем’єра першого сезону запланована на Netflix на 20 грудня, а другого сезону — на 2021 рік.',
    img: four,
    important: true,
    author: 'news24',
    category: 'культура',
    createdAt: moment().locale('uk-ua').format('lll').toString(),
    views: 1700,
  },
  {
    id: '5',
    title: 'Boeing 737 перестав бути найпопулярнішим літаком після авіакатастроф',
    text: 'авіалайнер Boeing 737 вперше за 55 років перестав бути найбільш популярним літаком у світі. Він поступився першістю Airbus A320. До кінця жовтня Boeing зареєстрував 15 136 замовлень на модель 737, повідомляє Business Insider. При цьому Airbus отримав на 27 замовлень літака A320 більше.',
    img: five,
    important: false,
    author: 'news24',
    category: 'технології',
    createdAt: moment().locale('uk-ua').format('lll').toString(),
    views: 3600,
  },
  {
    id: '6',
    title: 'Apple видалить сотні додатків про вейпи',
    text: 'компанія Apple видалить з магазину додатків App Store 181 додаток про вейпах. Це програми для управління температурою і підсвічуванням вейпов, а також соцмережі для спілкування і читання новин про вейпінг.',
    img: six,
    important: false,
    author: 'news24',
    category: 'технології',
    createdAt: moment().locale('uk-ua').format('lll').toString(),
    views: 1100,
  },
  {
    id: '7',
    title: 'З Instagram почали зникати лайки',
    text: 'В Instagram розширили тестування функції приховування лайків під постами на всі країни. «Якщо ви тестуєте [нову функцію], то більше не побачите кількість лайків і переглядів фото й відео у своїй стрічці, якщо це не ваші фотографії», — повідомили у компанії.',
    img: seven,
    important: true,
    author: 'news24',
    category: 'наука',
    createdAt: moment().locale('uk-ua').format('lll').toString(),
    views: 2900,
  }
]

