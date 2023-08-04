interface CustomItem {
  product: string;
  img: string;
  type: string;
}
export default interface Item {
  id: string;
  quantity: number;
  product: string;
  customize: CustomItem[];
  img: string
  price: number;
  comment: string;
}

