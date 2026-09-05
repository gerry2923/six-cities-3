export const offers = [
  // {
  //   // id: 'c85228b2-37c8-4b46-a38c-e0296f852c30',
  //   id: '1',
  //   title: 'The Joshua Tree House',
  //   type: 'apartment' as const,
  //   price: 225,
  //   previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
  //   city: {
  //     name: 'Amsterdam',
  //     location: {
  //       latitude: 52.3676,
  //       longitude: 4.9041,
  //       zoom: 13
  //     }
  //   },
  //   location: {
  //     latitude: 52.3746,
  //     longitude: 4.8952,
  //     zoom: 16
  //   },
  //   isFavorite: false,
  //   isPremium: false,
  //   rating: 4.5,
  //   description: 'Уютный апартамент в центре Парижа с прекрасным видом на город и современным ремонтом.',
  //   bedrooms: 2,
  //   goods: [
  //     'Wi-Fi',
  //     'Washing machine',
  //     'Heating',
  //     'Kitchen',
  //     'Air conditioning'
  //   ],
  //   host: {
  //     name: 'Marie Dubois',
  //     avatarUrl: 'https://loremflickr.com/54/54?random=1',
  //     isPro: true
  //   },
  //   images: [
  //     'https://loremflickr.com/260/200/apartment?random=845',
  //     'https://loremflickr.com/260/200/apartment?random=846',
  //     'https://loremflickr.com/260/200/apartment?random=847',
  //     'https://loremflickr.com/260/200/apartment?random=848'
  //   ],
  //   maxAdults: 4
  // },
  /** */
  {
    id: '1',
    title: 'The Joshua Tree House',
    type: 'apartment' as const,
    price: 225,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: true,
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
    id: '2',
    title: 'Cozy Loft near Central Station',
    type: 'house' as const,
    price: 320,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    description: 'Стильный лофт в районе Центрального вокзала с панорамными окнами и современным интерьером.',
    bedrooms: 3,
    goods: [
      'Wi-Fi',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Gym',
      'Parking'
    ],
    host: {
      name: 'Jan van der Berg',
      avatarUrl: 'https://loremflickr.com/54/54?random=2',
      isPro: true
    },
    images: [
      'https://loremflickr.com/260/200/apartment?random=901',
      'https://loremflickr.com/260/200/apartment?random=902',
      'https://loremflickr.com/260/200/apartment?random=903',
      'https://loremflickr.com/260/200/apartment?random=904',
      'https://loremflickr.com/260/200/apartment?random=905'
    ],
    maxAdults: 6
  },
  {
    id: '3',
    title: 'Charming Studio in De Pijp',
    type: 'room' as const,
    price: 145,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.9,
    description: 'Уютная студия в популярном районе Де Пейп, окруженная кафе и магазинами.',
    bedrooms: 1,
    goods: [
      'Wi-Fi',
      'Heating',
      'Coffee machine',
      'Towels',
      'Air conditioning'
    ],
    host: {
      name: 'Emma Jansen',
      avatarUrl: 'https://loremflickr.com/54/54?random=3',
      isPro: false
    },
    images: [
      'https://loremflickr.com/260/200/apartment?random=906',
      'https://loremflickr.com/260/200/apartment?random=907',
      'https://loremflickr.com/260/200/apartment?random=908',
      'https://loremflickr.com/260/200/apartment?random=909'
    ],
    maxAdults: 2
  },
  {
    id: '4',
    title: 'Luxury Hotel Suite with Canal View',
    type: 'hotel' as const,
    price: 580,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    // previewImage:'https://moqimg.ru/260x200.png',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    description: 'Роскошный номер отеля с видом на каналы Амстердама, премиум сервис и спа.',
    bedrooms: 2,
    goods: [
      'Wi-Fi',
      'Dishwasher',
      'Swimming pool',
      'Spa',
      'Restaurant',
      'Concierge',
      'Cabel TV',
      'Fridge'
    ],
    host: {
      name: 'Lucas Hendrickx',
      avatarUrl: 'https://loremflickr.com/54/54?random=4',
      isPro: true
    },
    images: [
      'https://loremflickr.com/260/200/apartment?random=910',
      'https://loremflickr.com/260/200/apartment?random=911',
      'https://loremflickr.com/260/200/apartment?random=912',
      'https://loremflickr.com/260/200/apartment?random=913',
      'https://loremflickr.com/260/200/apartment?random=914',
      'https://loremflickr.com/260/200/apartment?random=915'
    ],
    maxAdults: 4
  },
  {
    id: '5',
    title: 'Modern Apartment in Amsterdam West',
    type: 'apartment' as const,
    price: 290,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    description: 'Современный апартамент в развивающемся районе Запад, с минималистичным дизайном и всеми удобствами.',
    bedrooms: 2,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Kitchen',
      'Heating',
      'Parking',
      'Balcony'
    ],
    host: {
      name: 'Sophie van Dijk',
      avatarUrl: 'https://loremflickr.com/54/54?random=5',
      isPro: false
    },
    images: [
      'https://loremflickr.com/260/200/apartment?random=916',
      'https://loremflickr.com/260/200/apartment?random=917',
      'https://loremflickr.com/260/200/apartment?random=918',
      'https://loremflickr.com/260/200/apartment?random=919',
      'https://loremflickr.com/260/200/apartment?random=920',
      'https://loremflickr.com/260/200/apartment?random=921',
      'https://loremflickr.com/260/200/apartment?random=922'
    ],
    maxAdults: 5
  },
  /** -------------- */
  {
    // id: '45110842-c625-4ce9-83da-1300955127be',
    id: '6',
    title: 'House in countryside',
    type: 'room' as const,
    price: 170,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
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
    // id: '0b5a8c41-ff38-455c-8df0-f9afcf09c3d9',
    id: '7',
    title: 'The Joshua Tree House',
    type: 'hotel' as const,
    price: 401,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
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
  // {
  //   // id: 'd948acd2-d5f5-4dd6-9072-550fcd7887eb',
  //   id: '8',
  //   title: 'Loft Studio in the Central Area',
  //   type: 'house' as const,
  //   price: 770,
  //   previewImage: 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
  //   city: {
  //     name: 'Paris',
  //     location: {
  //       latitude: 48.8566,
  //       longitude: 2.3522,
  //       zoom: 13
  //     }
  //   },
  //   location: {
  //     latitude: 48.8626,
  //     longitude: 2.3466,
  //     zoom: 16
  //   },
  //   isFavorite: false,
  //   isPremium: false,
  //   rating: 3.2,
  //   description: 'Просторная лофт-студия в центральной части Парижа с высокими потолками и большими окнами.',
  //   bedrooms: 2,
  //   goods: [
  //     'Wi-Fi',
  //     'Kitchen',
  //     'Washing machine',
  //     'Heating',
  //     'Coffee machine',
  //     'Fridge',
  //     'Parking'
  //   ],
  //   host: {
  //     name: 'Sophie Renard',
  //     avatarUrl: 'https://loremflickr.com/54/54?random=4',
  //     isPro: false
  //   },
  //   images: [
  //     'https://loremflickr.com/260/200/apartment?random=860',
  //     'https://loremflickr.com/260/200/apartment?random=861',
  //     'https://loremflickr.com/260/200/apartment?random=862',
  //     'https://loremflickr.com/260/200/apartment?random=863',
  //     'https://loremflickr.com/260/200/apartment?random=864',
  //     'https://loremflickr.com/260/200/apartment?random=865',
  //     'https://loremflickr.com/260/200/apartment?random=866',
  //     'https://loremflickr.com/260/200/apartment?random=867'
  //   ],
  //   maxAdults: 5
  // }
  {
    id: '8',
    title: 'Loft Studio in the Central Area',
    type: 'house' as const,
    price: 770,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 13
      }
    },
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
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
  },
  {
    id: '9',
    title: 'Charming Apartment in Marais District',
    type: 'apartment' as const,
    price: 485,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8597,
        longitude: 2.3627,
        zoom: 13
      }
    },
    location: {
      latitude: 48.8597,
      longitude: 2.3627,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    description: 'Очаровательный апартамент в историческом районе Маре с видом на архитектуру 17-го века.',
    bedrooms: 2,
    goods: [
      'Wi-Fi',
      'Kitchen',
      'Dishwasher',
      'Heating',
      'Towels',
      'Air conditioning',
      'Balcony'
    ],
    host: {
      name: 'Claire Fontaine',
      avatarUrl: 'https://loremflickr.com/54/54?random=6',
      isPro: true
    },
    images: [
      'https://loremflickr.com/260/200/apartment?random=868',
      'https://loremflickr.com/260/200/apartment?random=869',
      'https://loremflickr.com/260/200/apartment?random=870',
      'https://loremflickr.com/260/200/apartment?random=871',
      'https://loremflickr.com/260/200/apartment?random=872'
    ],
    maxAdults: 4
  },
  {
    id: '10',
    title: 'Cozy Room in Latin Quarter',
    type: 'room' as const,
    price: 155,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8470,
        longitude: 2.3456,
        zoom: 13
      }
    },
    location: {
      latitude: 48.8470,
      longitude: 2.3456,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
    description: 'Уютная комната в сердце Латинского квартала, рядом с Сорбонной и историческими памятниками.',
    bedrooms: 1,
    goods: [
      'Wi-Fi',
      'Heating',
      'Coffee machine',
      'Towels',
      'Desk'
    ],
    host: {
      name: 'Antoine Leclerc',
      avatarUrl: 'https://loremflickr.com/54/54?random=7',
      isPro: false
    },
    images: [
      'https://loremflickr.com/260/200/apartment?random=873',
      'https://loremflickr.com/260/200/apartment?random=874',
      'https://loremflickr.com/260/200/apartment?random=875',
      'https://loremflickr.com/260/200/apartment?random=876'
    ],
    maxAdults: 2
  },
  {
    id: '11',
    title: 'Luxury Hotel in Champs-Élysées',
    type: 'hotel' as const,
    price: 950,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8699,
        longitude: 2.3077,
        zoom: 13
      }
    },
    location: {
      latitude: 48.8699,
      longitude: 2.3077,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    description: 'Роскошный отель на Елисейских полях с панорамным видом на Триумфальную арку и высочайшим уровнем сервиса.',
    bedrooms: 3,
    goods: [
      'Wi-Fi',
      'Restaurant',
      'Swimming pool',
      'Spa',
      'Concierge',
      'Cabel TV',
      'Fridge',
      'Gym'
    ],
    host: {
      name: 'Guillaume Moreau',
      avatarUrl: 'https://loremflickr.com/54/54?random=8',
      isPro: true
    },
    images: [
      'https://loremflickr.com/260/200/apartment?random=877',
      'https://loremflickr.com/260/200/apartment?random=878',
      'https://loremflickr.com/260/200/apartment?random=879',
      'https://loremflickr.com/260/200/apartment?random=880',
      'https://loremflickr.com/260/200/apartment?random=881',
      'https://loremflickr.com/260/200/apartment?random=882'
    ],
    maxAdults: 6
  },
  {
    id: '12',
    title: 'Modern Studio in Montmartre',
    type: 'apartment' as const,
    price: 385,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8867,
        longitude: 2.3431,
        zoom: 13
      }
    },
    location: {
      latitude: 48.8867,
      longitude: 2.3431,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
    description: 'Современная студия в живописном районе Монмартр с видом на базилику Сакре-Кёр и творческой атмосферой.',
    bedrooms: 1,
    goods: [
      'Wi-Fi',
      'Kitchen',
      'Washing machine',
      'Heating',
      'Air conditioning',
      'Parking'
    ],
    host: {
      name: 'Isabelle Rousseau',
      avatarUrl: 'https://loremflickr.com/54/54?random=9',
      isPro: false
    },
    images: [
      'https://loremflickr.com/260/200/apartment?random=883',
      'https://loremflickr.com/260/200/apartment?random=884',
      'https://loremflickr.com/260/200/apartment?random=885',
      'https://loremflickr.com/260/200/apartment?random=886',
      'https://loremflickr.com/260/200/apartment?random=887',
      'https://loremflickr.com/260/200/apartment?random=888',
      'https://loremflickr.com/260/200/apartment?random=889'
    ],
    maxAdults: 3
  }
];
