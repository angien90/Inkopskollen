/* Här sätts state upp via hooks, hanterar formulär, sortering, redigering etc samt skickar data till underkomponenter */

import { defaultItems } from "../models/defaultItems";
import { ItemForm } from "./ItemForm";

import { CompletedItems } from "./CompletedItems";
import { EditMode } from "./EditMode";
import { ShoppingListView } from "./ShoppingListView";

import { useShoppingItems } from "../hooks/useShoppingItems";

export const ShoppingList = () => {
  const {
    items,
    addItem,
    removeItem,
    toggleDone,
    undoDone,
    openEditMode,
    saveEditedItem,
    cancelEdit,
    editingItem,
  } = useShoppingItems(defaultItems);

   return (
    <>
      <div className="mt-8 mb-8 bg-gray-100 p-4 rounded-md max-w-[600px] mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#213547] mb-2 mt-4 sm:mt-4 uppercase">Inköpskollen</h1>
        <h2 className="text-2xl sm:text-3xl text-[#213547] mb-12 mt-0 font-normal">Smartare handling - Enklare vardag!</h2>
        <ItemForm addItem={addItem} />
        <ShoppingListView
          items={items}
          onRemove={removeItem}
          onEdit={openEditMode}
          onToggleDone={toggleDone}
        />
        <CompletedItems items={items} onUndo={undoDone} />
      </div>

      {editingItem && (
        <EditMode
          currentItem={editingItem.item}
          currentSection={editingItem.section}
          onSave={saveEditedItem}
          onClose={cancelEdit}
        />
      )}
    </>
  );
};