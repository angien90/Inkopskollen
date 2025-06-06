import { useState, useEffect, useCallback, useRef } from "react";
import { Item } from "../models/Items";

type StoredItem = {
  item: string;
  section: string;
  isDone: boolean;
  addedAt: number;
};

const STORAGE_KEY = "shoppingItems";

export function useShoppingItems(initialItems: Item[]) {
  const [items, setItems] = useState<Item[]>([]);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const hasInitialized = useRef(false);

  // Load items from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as StoredItem[];
        const loadedItems = parsed.map(
          (obj) => new Item(obj.item, obj.section, obj.isDone, obj.addedAt)
        );
        setItems(loadedItems);
      } catch (e) {
        console.error("Failed to parse saved items", e);
        setItems(initialItems);
      }
    } else {
      setItems(initialItems);
    }
  }, [initialItems]);

  // Save items to localStorage on change (but not on initial mount)
  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      return;
    }

    const toSave = items.map(({ id, item, section, isDone, addedAt }) => ({
      id,
      item,
      section,
      isDone,
      addedAt,
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }, [items]);

  const addItem = useCallback((item: string, section: string, isDone: boolean) => {
    setItems((prev) => [new Item(item, section, isDone), ...prev]);
  }, []);

  const removeItem = useCallback((itemName: string) => {
    setItems((prev) => prev.filter((i) => i.item !== itemName));
  }, []);

  const updateItem = useCallback((itemName: string, updater: (i: Item) => Item) => {
    setItems((prev) =>
      prev.map((i) => (i.item === itemName ? updater(i) : i))
    );
  }, []);

  const toggleDone = useCallback((itemName: string, isChecked: boolean) => {
    updateItem(itemName, (i) => new Item(i.item, i.section, isChecked, i.addedAt));
  }, [updateItem]);

  const undoDone = useCallback((itemName: string) => {
    updateItem(itemName, (i) => new Item(i.item, i.section, false, i.addedAt));
  }, [updateItem]);

  const openEditMode = useCallback((item: Item) => {
    setEditingItem(item);
  }, []);

  const saveEditedItem = useCallback(
    (newName: string, newSection: string) => {
      if (!editingItem) return;
      setItems((prev) =>
        prev.map((i) =>
          i.item === editingItem.item
            ? new Item(newName, newSection, i.isDone, i.addedAt)
            : i
        )
      );
      setEditingItem(null);
    },
    [editingItem]
  );

  const cancelEdit = useCallback(() => {
    setEditingItem(null);
  }, []);

  return {
    items,
    addItem,
    removeItem,
    toggleDone,
    undoDone,
    openEditMode,
    saveEditedItem,
    cancelEdit,
    editingItem,
  };
}
