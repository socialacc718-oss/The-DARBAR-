import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, MenuItemVariant, RESTAURANT_INFO } from '../data/menu';
import { CartItem, CustomerOrder, OrderType } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem, variant?: MenuItemVariant, notes?: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  deliveryFee: number;
  grandTotal: number;
  orderType: OrderType;
  setOrderType: (type: OrderType) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  confirmedOrder: CustomerOrder | null;
  setConfirmedOrder: (order: CustomerOrder | null) => void;
  createOrder: (details: {
    customerName: string;
    phone: string;
    orderType: OrderType;
    address?: string;
    tableNumber?: string;
    notes?: string;
    paymentMethod: 'Cash on Delivery' | 'Pay at Counter' | 'JazzCash / EasyPaisa';
  }) => CustomerOrder;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('darbaar_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<CustomerOrder | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('darbaar_cart', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  const addToCart = (item: MenuItem, variant?: MenuItemVariant, notes?: string) => {
    // If no variant specified but item has variants, pick first
    const selectedVar = variant || (item.variants && item.variants.length > 0 ? item.variants[0] : undefined);
    const unitPrice = selectedVar ? selectedVar.price : (item.price || 0);
    const cartItemId = `${item.id}-${selectedVar ? selectedVar.label : 'std'}`;

    setItems((prev) => {
      const existingIndex = prev.findIndex((ci) => ci.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
          specialNotes: notes || next[existingIndex].specialNotes,
        };
        return next;
      } else {
        return [
          ...prev,
          {
            cartItemId,
            item,
            selectedVariant: selectedVar,
            quantity: 1,
            unitPrice,
            specialNotes: notes,
          },
        ];
      }
    });

    // brief visual confirmation can open cart or keep silent
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setItems((prev) =>
      prev.map((ci) => (ci.cartItemId === cartItemId ? { ...ci, quantity } : ci))
    );
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((ci) => ci.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, ci) => sum + ci.quantity, 0);
  const subtotal = items.reduce((sum, ci) => sum + ci.unitPrice * ci.quantity, 0);

  // Delivery fee calculation: free if above threshold or if takeaway/dine-in
  const deliveryFee =
    orderType !== 'delivery'
      ? 0
      : subtotal >= RESTAURANT_INFO.freeDeliveryThreshold || subtotal === 0
      ? 0
      : RESTAURANT_INFO.deliveryFee;

  const grandTotal = subtotal + deliveryFee;

  const createOrder = (details: {
    customerName: string;
    phone: string;
    orderType: OrderType;
    address?: string;
    tableNumber?: string;
    notes?: string;
    paymentMethod: 'Cash on Delivery' | 'Pay at Counter' | 'JazzCash / EasyPaisa';
  }): CustomerOrder => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const orderId = `DRB-${randomNum}`;

    const newOrder: CustomerOrder = {
      orderId,
      createdAt: new Date().toISOString(),
      customerName: details.customerName,
      phone: details.phone,
      orderType: details.orderType,
      address: details.address,
      tableNumber: details.tableNumber,
      notes: details.notes,
      paymentMethod: details.paymentMethod,
      items: [...items],
      subtotal,
      deliveryFee,
      grandTotal,
    };

    setConfirmedOrder(newOrder);
    clearCart();
    setIsCheckoutOpen(false);
    return newOrder;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        subtotal,
        deliveryFee,
        grandTotal,
        orderType,
        setOrderType,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        confirmedOrder,
        setConfirmedOrder,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
