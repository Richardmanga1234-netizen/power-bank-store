"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { CartItem } from "@/types";
import type { ColorId } from "@/lib/product";

const STORAGE_KEY = "voltcell-cart";

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  updateQuantity: (color: ColorId, quantity: number) => void;
  removeItem: (color: ColorId) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

function readStoredItems(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

const noopSubscribe = () => () => {};

// The cart is persisted to localStorage, which only exists on the client.
// useSyncExternalStore lets the first render match the server (empty) while
// still picking up the real, persisted cart immediately after hydration —
// without the mismatch a manual "setState on mount" effect would cause.
function useHasMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readStoredItems);
  const [isOpen, setIsOpen] = useState(false);
  const hasMounted = useHasMounted();

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage unavailable; cart still works in-memory
    }
  }, [items]);

  const addItem = useCallback<CartContextValue["addItem"]>(
    (item, quantity = 1) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.color === item.color);
        if (existing) {
          return prev.map((i) =>
            i.color === item.color
              ? { ...i, quantity: i.quantity + quantity }
              : i
          );
        }
        return [...prev, { ...item, quantity }];
      });
      setIsOpen(true);
    },
    []
  );

  const updateQuantity = useCallback<CartContextValue["updateQuantity"]>(
    (color, quantity) => {
      setItems((prev) =>
        quantity <= 0
          ? prev.filter((i) => i.color !== color)
          : prev.map((i) => (i.color === color ? { ...i, quantity } : i))
      );
    },
    []
  );

  const removeItem = useCallback<CartContextValue["removeItem"]>((color) => {
    setItems((prev) => prev.filter((i) => i.color !== color));
  }, []);

  const visibleItems = useMemo(
    () => (hasMounted ? items : []),
    [hasMounted, items]
  );

  const count = useMemo(
    () => visibleItems.reduce((sum, i) => sum + i.quantity, 0),
    [visibleItems]
  );
  const subtotal = useMemo(
    () => visibleItems.reduce((sum, i) => sum + i.quantity * i.price, 0),
    [visibleItems]
  );

  const value: CartContextValue = {
    items: visibleItems,
    count,
    subtotal,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    updateQuantity,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
