export const offers = [
  {
    id: 'c85228b2-37c8-4b46-a38c-e0296f852c30',
    title: 'The Joshua Tree House',
    type: 'apartment' as const,
    price: 225,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3746,
      longitude: 4.8952,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    description: 'Уютный апартамент в центре Парижа с прекрасным видом на город и современным ремонтом.',
    bedrooms: 2,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Heating',
      'Kitchen',
      'Air conditioning'
    ],
    host: {
      name: 'Marie Dubois',
      avatarUrl: 'https://loremflickr.com/54/54?random=1',
      isPro: true
    },
    images: [
      'https://loremflickr.com/260/200/apartment?random=845',
      'https://loremflickr.com/260/200/apartment?random=846',
      'https://loremflickr.com/260/200/apartment?random=847',
      'https://loremflickr.com/260/200/apartment?random=848'
    ],
    maxAdults: 4
  },
  {
    id: '45110842-c625-4ce9-83da-1300955127be',
    title: 'House in countryside',
    type: 'room' as const,
    price: 170,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.9365,
        longitude: 6.9589,
        zoom: 13
      }
    },
    location: {
      latitude: 50.9406,
      longitude: 6.9563,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
    description: 'Спокойная комната в загородном доме, идеальна для отдыха и релаксации вдали от городского шума.',
    bedrooms: 1,
    goods: [
      'Heating',
      'Towels',
      'Coffee machine',
      'Fridge',
      'Parking'
    ],
    host: {
      name: 'Pierre Laurent',
      avatarUrl: 'https://loremflickr.com/54/54?random=2',
      isPro: false
    },
    images: [
      'https://loremflickr.com/260/200/apartment?random=849',
      'https://loremflickr.com/260/200/apartment?random=850',
      'https://loremflickr.com/260/200/apartment?random=851',
      'https://loremflickr.com/260/200/apartment?random=852',
      'https://loremflickr.com/260/200/apartment?random=853'
    ],
    maxAdults: 2
  },
  {
    id: '0b5a8c41-ff38-455c-8df0-f9afcf09c3d9',
    title: 'The Joshua Tree House',
    type: 'hotel' as const,
    price: 401,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.8503,
        longitude: 4.3517,
        zoom: 13
      }
    },
    location: {
      latitude: 50.8566,
      longitude: 4.3522,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    description: 'Люксовый отель в центре Парижа с премиум сервисом, спа и ресторан высокой кухни.',
    bedrooms: 3,
    goods: [
      'Wi-Fi',
      'Dishwasher',
      'Cabel TV',
      'Kitchen',
      'Towels',
      'Washing machine',
      'Swimming pool',
      'Gym'
    ],
    host: {
      name: 'Jean-Paul Martin',
      avatarUrl: 'https://loremflickr.com/54/54?random=3',
      isPro: true
    },
    images: [
      'https://loremflickr.com/260/200/apartment?random=854',
      'https://loremflickr.com/260/200/apartment?random=855',
      'https://loremflickr.com/260/200/apartment?random=856',
      'https://loremflickr.com/260/200/apartment?random=857',
      'https://loremflickr.com/260/200/apartment?random=858',
      'https://loremflickr.com/260/200/apartment?random=859'
    ],
    maxAdults: 6
  },
  {
    id: 'd948acd2-d5f5-4dd6-9072-550fcd7887eb',
    title: 'Loft Studio in the Central Area',
    type: 'house' as const,
    price: 770,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 13
      }
    },
    location: {
      latitude: 48.8626,
      longitude: 2.3466,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.2,
    description: 'Просторная лофт-студия в центральной части Парижа с высокими потолками и большими окнами.',
    bedrooms: 2,
    goods: [
      'Wi-Fi',
      'Kitchen',
      'Washing machine',
      'Heating',
      'Coffee machine',
      'Fridge',
      'Parking'
    ],
    host: {
      name: 'Sophie Renard',
      avatarUrl: 'https://loremflickr.com/54/54?random=4',
      isPro: false
    },
    images: [
      'https://loremflickr.com/260/200/apartment?random=860',
      'https://loremflickr.com/260/200/apartment?random=861',
      'https://loremflickr.com/260/200/apartment?random=862',
      'https://loremflickr.com/260/200/apartment?random=863',
      'https://loremflickr.com/260/200/apartment?random=864',
      'https://loremflickr.com/260/200/apartment?random=865',
      'https://loremflickr.com/260/200/apartment?random=866',
      'https://loremflickr.com/260/200/apartment?random=867'
    ],
    maxAdults: 5
  }
];
