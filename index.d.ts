type TProduct = {
  category: TCategory;
  creationAt: string;
  description: string;
  id: number;
  images: string[];
  price: number;
  title: string;
  updatedAt: string;
};

type TCategory = {
  creationAt: string;
  id: number;
  image: string;
  name: string;
  updatedAt: string;
};
