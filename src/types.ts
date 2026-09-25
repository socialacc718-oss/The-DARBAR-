import { MenuItem, MenuItemVariant } from './data/menu';

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  selectedVariant?: MenuItemVariant;
  quantity: number;
  spiceLevel?: 'Mild' | 'Medium' | 'Extra Spicy';
  specialNotes?: string;
  unitPrice: number;
}

export type OrderType = 'delivery' | 'takeaway' | 'dine-in';

export interface CustomerOrder {
  orderId: string;
  createdAt: string;
  customerName: string;
  phone: string;
  orderType: OrderType;
  address?: string;
  tableNumber?: string;
  notes?: string;
  paymentMethod: 'Cash on Delivery' | 'Pay at Counter' | 'JazzCash / EasyPaisa';
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  grandTotal: number;
}
