import { createContext, useContext, useState, useEffect } from "react";
import type { CartContextType, CartItem, Shoe } from "../../types/";

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Zapisywanie koszyka do localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (shoe: Shoe, size: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.model === shoe.model && item.size === size,
      );

      if (existingItem) {
        return prev.map((item) =>
          item === existingItem ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [
        ...prev,
        {
          brand: shoe.brand,
          model: shoe.model,
          price: shoe.price,
          image: shoe.images[0],
          size,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (shoeModel: string, size: number) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.model === shoeModel && item.size === size)),
    );
  };

  // ← NOWA FUNKCJA: zmiana ilości
  const updateQuantity = (model: string, size: number, newQuantity: number) => {
    if (newQuantity < 1) return; // nie pozwalamy na ilość mniejszą niż 1

    setCartItems((prev) =>
      prev.map((item) =>
        item.model === model && item.size === size
          ? { ...item, quantity: newQuantity }
          : item,
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity, // ← dodane
      }}
    >
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
