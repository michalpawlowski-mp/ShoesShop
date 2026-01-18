import { createContext, useContext, useState, useEffect } from "react";
import type { Shoe } from "../../types/Shoe";

type CartItem = {
  shoe: Shoe;
  size: number;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (shoe: Shoe, size: number) => void;
  removeFromCart: (shoeModel: string, size: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (shoe: Shoe, size: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.shoe.model === shoe.model && item.size === size,
      );

      if (existingItem) {
        return prev.map((item) =>
          item === existingItem ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...prev, { shoe, size, quantity: 1 }];
    });
  };

  const removeFromCart = (shoeModel: string, size: number) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.shoe.model === shoeModel && item.size === size)),
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
