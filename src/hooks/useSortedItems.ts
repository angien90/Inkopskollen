import { useMemo, useEffect, useState } from "react";
import { Item } from "../models/Items";

export type SortOption = {
  field: "item" | "section" | "added" | null;
  direction: "asc" | "desc";
};

export function useSortedItems(items: Item[]) {
  const [sortOption, setSortOption] = useState<SortOption>(() => {
    const saved = localStorage.getItem("sortOption");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Kontrollera att parsed verkligen är av rätt form
        if (
          parsed &&
          (parsed.field === "item" || parsed.field === "section" || parsed.field === "added" || parsed.field === null) &&
          (parsed.direction === "asc" || parsed.direction === "desc")
        ) {
          return parsed;
        }
        return { field: null, direction: "asc" };
      } catch {
        return { field: null, direction: "asc" };
      }
    }
    return { field: null, direction: "asc" };
  });

  useEffect(() => {
    localStorage.setItem("sortOption", JSON.stringify(sortOption));
  }, [sortOption]);

  const sortedItems = useMemo(() => {
    // Filtrerar bort "färdiga" objekt
    const activeItems = items.filter((item) => !item.isDone);

    // Om inget fält valt, returnera utan sortering
    if (!sortOption.field) return activeItems;

    // Sorterar på addedAt
    if (sortOption.field === "added") {
      const dir = sortOption.direction === "asc" ? 1 : -1;
      return [...activeItems].sort((a, b) => (a.addedAt - b.addedAt) * dir);
    }

    // Sorterar på item eller section
    const field = sortOption.field as keyof Pick<Item, "item" | "section">;
    return [...activeItems].sort((a, b) => {
      const valueA = a[field];
      const valueB = b[field];

      // Säkerställ att båda är strängar innan localeCompare
      if (typeof valueA === "string" && typeof valueB === "string") {
        const result = valueA.localeCompare(valueB);
        return sortOption.direction === "asc" ? result : -result;
      }
      // Om något är icke-sträng, behåll originalordning (eller definiera eget beteende)
      return 0;
    });
  }, [items, sortOption]);

  return { sortedItems, sortOption, setSortOption };
}
