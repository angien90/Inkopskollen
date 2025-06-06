/* Renderingen av listan */

import { ShoppingListItem } from "./ShoppingListItem";
import { Item } from "../models/Items";
import Heading3 from "../style/Heading3";
import { SortButtons } from "./SortButtons";
import { useSortedItems } from "../hooks/useSortedItems";
import type { SortOption } from "../hooks/useSortedItems";

type Props = {
  items: Item[];
  onRemove: (name: string) => void;
  onEdit: (item: Item) => void;
  onToggleDone: (name: string, checked: boolean) => void;
};

export const ShoppingListView = ({ items, onRemove, onEdit, onToggleDone }: Props) => {
  const { sortedItems, sortOption, setSortOption } = useSortedItems(items);

  const handleSortChange = (field: SortOption["field"] | null) => {
    setSortOption(prev => {
      if (field === null) return { field: null, direction: "asc" };
      const direction = prev.field === field && prev.direction === "asc" ? "desc" : "asc";
      return { field, direction };
    });
  };

return (
    <div className="bg-gray-100 p-4 rounded-md">
      <Heading3>Din inköpslista</Heading3>
      <SortButtons onSortChange={handleSortChange} sortOption={sortOption} />
      <ul id="shopping-list" className="list-none p-0">
        {sortedItems.map((item) => (
          <ShoppingListItem
            key={item.id}
            item={item}
            onRemove={onRemove}
            onChange={() => onEdit(item)}
            onToggleDone={onToggleDone}
          />
        ))}
      </ul>
    </div>
  );
};