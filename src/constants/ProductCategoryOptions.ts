import { ProductCategory } from '@/enums/ProductCategory.enum';

export const productCategoryOptions = [
  {
    label: 'Lọc gió Động cơ - Air Filter',
    value: ProductCategory.AirFilter,
    count: 24,
  },
  {
    label: 'Lọc Nhiên Liệu - Fuel Filter',
    value: ProductCategory.FuelFilter,
    count: 24,
  },
  {
    label: 'Bộ lọc dầu',
    value: ProductCategory.OilFilter,
    count: 24,
  },
  {
    label: 'Chưa phân loại',
    value: ProductCategory.Uncategorized,
    count: 24,
  },
  {
    label: 'Khác',
    value: ProductCategory.Other,
    count: 24,
  },
];
