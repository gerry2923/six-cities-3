import { TReviews } from '../components/tconst';

// const reviwes: TReviews = [
//   {
//     id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
//     date: '2019-05-08T14:13:56.569Z',
//     user: {
//       name: 'Oliver Conner',
//       avatarUrl: 'https://loremflickr.com/54/54?random=366',
//       isPro: false
//     },
//     comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
//     rating: 4
//   },
//   {
//     id: 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d',
//     date: '2020-01-15T09:22:10.123Z',
//     user: {
//       name: 'Maria Ivanova',
//       avatarUrl: 'https://loremflickr.com/54/54?random=101',
//       isPro: true
//     },
//     comment: 'The view from the balcony is simply breathtaking, especially at sunset.',
//     rating: 5
//   },
//   {
//     id: 'c9d8e7f6-a5b4-3c2d-1e0f-9a8b7c6d5e4f',
//     date: '2021-07-22T18:45:33.789Z',
//     user: {
//       name: 'Alexey Petrov',
//       avatarUrl: 'https://loremflickr.com/54/54?random=202',
//       isPro: false
//     },
//     comment: 'Very clean and modern apartment, close to all main attractions.',
//     rating: 4
//   },
//   {
//     id: 'd1e2f3a4-b5c6-7d8e-9f01-2a3b4c5d6e7f',
//     date: '2018-11-03T11:02:44.001Z',
//     user: {
//       name: 'Elena Smirnova',
//       avatarUrl: 'https://loremflickr.com/54/54?random=303',
//       isPro: true
//     },
//     comment: 'Perfect location for exploring the city on foot.',
//     rating: 5
//   },
//   {
//     id: 'e2f3a4b5-c6d7-8e9f-0a1b-2c3d4e5f6a7b',
//     date: '2022-03-10T07:59:22.456Z',
//     user: {
//       name: 'Ivan Kuznetsov',
//       avatarUrl: 'https://loremflickr.com/54/54?random=404',
//       isPro: false
//     },
//     comment: 'Friendly host, everything was as described in the listing.',
//     rating: 4
//   },
//   {
//     id: 'f3a4b5c6-d7e8-9f0a-1b2c-3d4e5f6a7b8c',
//     date: '2017-09-18T16:33:11.890Z',
//     user: {
//       name: 'Olga Volkova',
//       avatarUrl: 'https://loremflickr.com/54/54?random=505',
//       isPro: true
//     },
//     comment: 'Great value for money, highly recommend!',
//     rating: 5
//   },
//   {
//     id: 'a4b5c6d7-e8f9-0a1b-2c3d-4e5f6a7b8c9d',
//     date: '2023-06-05T13:47:09.321Z',
//     user: {
//       name: 'Sergey Popov',
//       avatarUrl: 'https://loremflickr.com/54/54?random=606',
//       isPro: false
//     },
//     comment: 'The kitchen is well-equipped, ideal for cooking your own meals.',
//     rating: 4
//   },
//   {
//     id: 'b5c6d7e8-f90a-1b2c-3d4e-5f6a7b8c9d0e',
//     date: '2020-12-31T20:15:55.678Z',
//     user: {
//       name: 'Natalia Orlova',
//       avatarUrl: 'https://loremflickr.com/54/54?random=707',
//       isPro: true
//     },
//     comment: 'Very comfortable bed and excellent Wi-Fi connection.',
//     rating: 5
//   },
//   {
//     id: 'c6d7e8f9-0a1b-2c3d-4e5f-6a7b8c9d0e1f',
//     date: '2019-08-14T08:29:44.234Z',
//     user: {
//       name: 'Dmitry Sokolov',
//       avatarUrl: 'https://loremflickr.com/54/54?random=808',
//       isPro: false
//     },
//     comment: 'A bit noisy at night due to nearby street, but overall good.',
//     rating: 3
//   },
//   {
//     id: 'd7e8f90a-1b2c-3d4e-5f6a-7b8c9d0e1f2g',
//     date: '2021-04-20T19:01:33.567Z',
//     user: {
//       name: 'Anna Morozova',
//       avatarUrl: 'https://loremflickr.com/54/54?random=909',
//       isPro: true
//     },
//     comment: 'Spacious and bright room, perfect for a short stay.',
//     rating: 5
//   },
//   {
//     id: 'e8f90a1b-2c3d-4e5f-6a7b-8c9d0e1f2g3h',
//     date: '2018-02-28T15:44:11.901Z',
//     user: {
//       name: 'Vladimir Lebedev',
//       avatarUrl: 'https://loremflickr.com/54/54?random=110',
//       isPro: false
//     },
//     comment: 'Check-in was smooth, host was very responsive.',
//     rating: 4
//   },
//   {
//     id: 'f90a1b2c-3d4e-5f6a-7b8c-9d0e1f2g3h4i',
//     date: '2022-10-07T10:33:59.777Z',
//     user: {
//       name: 'Ekaterina Romanova',
//       avatarUrl: 'https://loremflickr.com/54/54?random=211',
//       isPro: true
//     },
//     comment: 'Loved the interior design, very stylish and cozy.',
//     rating: 5
//   },
//   {
//     id: '0a1b2c3d-4e5f-6a7b-8c9d-0e1f2g3h4i5j',
//     date: '2020-07-16T17:58:22.888Z',
//     user: {
//       name: 'Pavel Nikitin',
//       avatarUrl: 'https://loremflickr.com/54/54?random=312',
//       isPro: false
//     },
//     comment: 'Good location, but a little bit far from the center.',
//     rating: 3
//   },
//   {
//     id: '1b2c3d4e-5f6a-7b8c-9d0e-1f2g3h4i5j6k',
//     date: '2019-12-01T12:09:47.654Z',
//     user: {
//       name: 'Maria Sokolova',
//       avatarUrl: 'https://loremflickr.com/54/54?random=413',
//       isPro: true
//     },
//     comment: 'Everything was perfect, would definitely come back!',
//     rating: 5
//   }
// ];
export const reviews: TReviews = [
  // Комментарии для предложения id: '1'
  {
    id: 'c1f8a3b2-5d9e-4c7a-9f2b-1e5d3a8c4b6f',
    offerId: '1',
    date: '2024-01-15T10:30:00.000Z',
    user: {
      name: 'Sophia Johnson',
      avatarUrl: 'https://loremflickr.com/54/54?random=63',
      isPro: true
    },
    comment: 'Отличный апартамент! Очень чистый и удобный, расположение идеальное для туристов. Хозяин очень отзывчивый.',
    rating: 5
  },
  {
    id: 'd2g9b4c3-6e0f-5d8b-0g3c-2f6e4b9d5c7g',
    offerId: '1',
    date: '2024-01-10T14:45:30.000Z',
    user: {
      name: 'Mia Davis',
      avatarUrl: 'https://loremflickr.com/54/54?random=23',
      isPro: false
    },
    comment: 'Приятное место для проживания. Все необходимое есть. Немного шумно с улицы, но в целом хорошо.',
    rating: 4
  },
  {
    id: 'e3h0c5d4-7f1g-6e9c-1h4d-3g7f5c0e6d8h',
    offerId: '1',
    date: '2024-01-05T09:15:20.000Z',
    user: {
      name: 'William Clark',
      avatarUrl: 'https://loremflickr.com/54/54?random=39',
      isPro: true
    },
    comment: 'Прекрасный вид на город, современный интерьер. Кровать очень удобная. Рекомендую всем!',
    rating: 5
  },
  {
    id: 'f4i1d6e5-8g2h-7f0d-2i5e-4h8g6d1f7e9i',
    offerId: '1',
    date: '2023-12-28T16:20:45.000Z',
    user: {
      name: 'William Clark',
      avatarUrl: 'https://loremflickr.com/54/54?random=91',
      isPro: true
    },
    comment: 'Хорошее место для семьи. Много света, просторные комнаты. Кухня полностью оборудована.',
    rating: 4
  },
  {
    id: 'g5j2e7f6-9h3i-8g1e-3j6f-5i9h7e2g8f0j',
    offerId: '1',
    date: '2023-12-20T11:50:15.000Z',
    user: {
      name: 'Sophia Johnson',
      avatarUrl: 'https://loremflickr.com/54/54?random=20',
      isPro: false
    },
    comment: 'Уютное место в центре города. Все работает как надо. Немного маловато места в шкафу, но это не проблема.',
    rating: 3
  },

  // Комментарии для предложения id: '2'
  {
    id: 'h6k3f8g7-0i4j-9h2f-4k7g-6j0i8f3h9g1k',
    offerId: '2',
    date: '2024-01-12T13:25:50.000Z',
    user: {
      name: 'Sophia Johnson',
      avatarUrl: 'https://loremflickr.com/54/54?random=63',
      isPro: true
    },
    comment: 'Лофт превосходен! Высокие потолки, панорамные окна, вид на вокзал. Идеально для творческих людей.',
    rating: 5
  },
  {
    id: 'i7l4g9h8-1j5k-0i3g-5l8h-7k1j9g4i0h2l',
    offerId: '2',
    date: '2024-01-08T15:40:30.000Z',
    user: {
      name: 'Mia Davis',
      avatarUrl: 'https://loremflickr.com/54/54?random=23',
      isPro: false
    },
    comment: 'Потрясающее место! Современный дизайн, все удобства на месте. Район очень живой и интересный.',
    rating: 5
  },
  {
    id: 'j8m5h0i9-2k6l-1j4h-6m9i-8l2k0h5j1i3m',
    offerId: '2',
    date: '2024-01-03T08:55:20.000Z',
    user: {
      name: 'William Clark',
      avatarUrl: 'https://loremflickr.com/54/54?random=39',
      isPro: true
    },
    comment: 'Отличный лофт, просторный и светлый. Может быть немного холодновато зимой, но хорошее отопление помогает.',
    rating: 4
  },
  {
    id: 'k9n6i1j0-3l7m-2k5i-7n0j-9m3l1i6k2j4n',
    offerId: '2',
    date: '2023-12-26T12:30:10.000Z',
    user: {
      name: 'William Clark',
      avatarUrl: 'https://loremflickr.com/54/54?random=91',
      isPro: true
    },
    comment: 'Идеальное место для пар и небольших групп. Кухня полностью оснащена. Близко ко всему необходимому.',
    rating: 5
  },
  {
    id: 'l0o7j2k1-4m8n-3l6j-8o1k-0n4m2j7l3k5o',
    offerId: '2',
    date: '2023-12-18T17:45:55.000Z',
    user: {
      name: 'Sophia Johnson',
      avatarUrl: 'https://loremflickr.com/54/54?random=20',
      isPro: false
    },
    comment: 'Шикарный лофт! Немного дорого, но оно того стоит. Месторасположение идеальное для ночной жизни.',
    rating: 4
  }
];
