export interface ICategory {
  active: boolean;
  categoryType: string;
  id: number;
  imageUrl: string | null;
  name: string;
  parentCategoryId: string | null;
  products: IProduct[];
  sortIndex: number;
  subCategories: ICategory[] | [];
}

export interface IProduct {
  mainPhoto: string;
  bgColor: string;
  categoryId: number | null;
  description: string;
  id: number;
  imgUrls: string[];
  ainPhoto: string;
  name: string;
  ogImageUrl: string | null;
  otherImages: string[];
  price: number;
  shortDescription: string | null;
  slug: string;
  sortIndex: number;
  title: string;
  type: string;
  capsuleProducts: ICapsule[];
  specifications: ISpecification[];
}

export interface ICapsule {
  id: number;
  name: string;
  imgUrl: string;
  bgColor: string;
  sortIndex: number;
  format: string;
  specifications: ISpecification[];
}

export interface ISpecification {
  id: number | null;
  maxValue: string;
  name: string;
  sortIndex: number;
  value: string;
}

export interface Iciti {
  id: number;
  latitude: string;
  longitude: string;
  main: boolean;
  name: string;
  pointCount: number;
}

export interface IContact {
  name: string;
  value: string;
  socialLinks: socialLink[];
}
interface socialLink {
  imageUrl: string;
  ogImageUrl: string;
  link: string;
}
