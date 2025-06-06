import { useState } from "react";
import Heading3 from "../style/Heading3";
import Button from "../style/Button";
import Input from "../style/Input";

interface EditModeProps {
  currentItem: string;
  currentSection: string;
  onSave: (newName: string, newSection: string) => void;
  onClose: () => void;
}

export const EditMode = ({
  currentItem,
  currentSection,
  onSave,
  onClose,
}: EditModeProps) => {
  const [newName, setNewName] = useState(currentItem);
  const [newSection, setNewSection] = useState(currentSection);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(newName.trim(), newSection.trim());
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-[url('./assets/fresh.webp')] bg-cover bg-center bg-opacity-50 flex items-center justify-center z-[999]">
      <div className="bg-white p-8 rounded-lg max-w-[400px] w-[90%] shadow-xl">
        <Heading3>Redigera vara</Heading3>
        <form onSubmit={handleSubmit} className="flex flex-wrap justify-center gap-4 mt-4 max-w-[600px] mx-auto my-8">
          <label htmlFor="item-name" className="flex flex-row gap-[10px] w-full font-medium">
            Namn:
            <Input
              id="item-name"
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="item-name" className="flex flex-row gap-[10px] w-full font-medium">
            Avdelning:
            <Input
              id="item-section"
              name="item-section"
              type="text"
              value={newSection}
              onChange={(e) => setNewSection(e.target.value)}
              required
            />
          </label>
          <div className="flex gap-4 justify-end mt-5">
            <Button type="submit" variant="primary" aria-label="Spara">
              Spara
            </Button>
            <Button type="button" variant="primary" onClick={onClose} aria-label="Avbryt">
              Avbryt
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
