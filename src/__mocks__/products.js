import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'AL RAWABI FARAMS A',
    media: '/static/images/products/product_1.png',
    title: 'Farm A',
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'AL AIN FARAMS B',
    media: '/static/images/products/product_2.png',
    title: 'Farm B',
    totalDownloads: '625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'AL RAWABI FARAMS C',
    media: '/static/images/products/product_3.png',
    title: 'Farm C',
    totalDownloads: '857'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'AL AIN FARAMS D',
    media: '/static/images/products/product_4.png',
    title: 'Farm D',
    totalDownloads: '406'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'AL AIN FARAMS E',
    media: '/static/images/products/product_5.png',
    title: 'Farm E',
    totalDownloads: '835'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'AL AIN FARAMS F',
    media: '/static/images/products/product_6.png',
    title: 'Farm F',
    totalDownloads: '835'
  }
];
