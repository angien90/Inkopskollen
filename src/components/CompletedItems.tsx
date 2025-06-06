/* Visar plockade varor längst ner */

import { Item } from "../models/Items";
import Heading3 from "../style/Heading3";
import Button from "../style/Button";
import List from "../style/List";
import ListItem from "../style/ListItem";

type CompletedItemsProps = {
  items: Item[];
  onUndo: (itemName: string) => void;
};

export const CompletedItems = ({ items, onUndo }: CompletedItemsProps) => {
  const completedItems = items.filter((item) => item.isDone);

  if (completedItems.length === 0) return null;

  return (
    <div className="mt-8 bg-gray-100 p-4 rounded-md max-w-[600px] mx-auto">
      <Heading3>Plockade varor</Heading3>
      <List>
        {completedItems.map((item) => (
          <ListItem
            key={item.id}
          >
            <label
              htmlFor={`completed-${item.item}`}
              className="flex items-center cursor-default"
            >
            <input
              className="ml-2 mr-[30px] w-[18px] h-[18px] cursor-pointer border-gray-700 rounded bg-transparent accent-white"
              id={`completed-${item.item}`}
              name={`done-${item.item}`}
              type="checkbox"
              title="Avklarade"
              checked={item.isDone}
              onChange={() => onUndo(item.item)}
            />
              {item.item} ({item.section})
            </label>
            <Button
              variant="undo"
              onClick={() => onUndo(item.item)}
              aria-label="Ångra"
            >
              Ångra
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

