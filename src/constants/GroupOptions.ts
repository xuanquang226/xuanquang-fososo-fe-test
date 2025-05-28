import { Brand } from '@/enums/Brand.enum';
import { Year } from '@/enums/Year.enum';
import { Origin } from '@/enums/Origin.enum';

export const filterGroups = [
  {
    title: 'Thương hiệu',
    key: 'brand',
    options: [
      { label: 'Asakashi', value: Brand.Asakashi, count: 24 },
      { label: 'Bosch', value: Brand.Bosch, count: 24 },
      { label: 'Huyndai', value: Brand.Huyndai, count: 24 },
    ],
  },
  {
    title: 'Năm sản xuất',
    key: 'year',
    options: [
      { label: '2021', value: Year.Y2021, count: 24 },
      { label: '2020', value: Year.Y2020, count: 24 },
      { label: '2019', value: Year.Y2019, count: 24 },
      { label: '2018', value: Year.Y2018, count: 24 },
    ],
  },
  {
    title: 'Xuất xứ',
    key: 'origin',
    options: [
      { label: 'Đức', value: Origin.Germany, count: 24 },
      { label: 'Nhật Bản', value: Origin.Japan, count: 24 },
      { label: 'Trung Quốc', value: Origin.China, count: 24 },
    ],
  },
];
