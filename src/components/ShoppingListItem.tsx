/* Visar varje enskild vara i inköpslistan */

import React from "react";
import { Item } from "../models/Items";
import Button from "../style/Button";

interface ShoppingListItemProps {
  item: Item;
  onRemove: (itemName: string) => void;
  onChange: () => void;
  onToggleDone: (itemName: string, isChecked: boolean) => void;
}

export const ShoppingListItem = React.memo(({ item, onRemove, onChange, onToggleDone }: ShoppingListItemProps) => {
  return (
    <li className="flex flex-col sm:flex-row items-center justify-center sm:justify-between text-gray-600 bg-gray-200 px-4 py-2 rounded mb-2 gap-2 text-center sm:text-left">
      <span className="item-info">
        <label htmlFor={`checkbox-${item.item}`} className="flex items-center cursor-pointer">
          <input
            className="ml-2 mr-[30px] w-[18px] h-[18px] cursor-pointer"
            id={`checkbox-${item.item}`}
            name={`done-${item.item}`}
            type="checkbox"
            title="Bocka i avklarade"
            checked={item.isDone}
            onChange={(e) => onToggleDone(item.item, e.target.checked)}
          />
          {item.item} ({item.section})
        </label>
      </span>
      <span className="item-buttons">
         <Button variant="change" onClick={onChange} aria-label="Ändra">
          Ändra
        </Button>
        <Button variant="delete" onClick={() => onRemove(item.item)} aria-label="Ta bort">
          Ta bort
        </Button>
      </span>
    </li>
  );
});
