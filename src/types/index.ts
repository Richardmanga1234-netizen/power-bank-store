import type { ColorId } from "@/lib/product";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  color: ColorId;
  quantity: number;
  image: string;
}
