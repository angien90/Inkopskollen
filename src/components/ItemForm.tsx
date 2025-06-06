import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Item } from "../models/Items";
import Heading3 from "../style/Heading3";
import Button from "../style/Button";

type Props = {
    addItem: (item: string, section: string, isDone: boolean) => void;
};

export const ItemForm = ({ addItem }: Props) => {
    const [item, setItem] = useState<Item>(new Item("", "", false));
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setItem({
            ...item,
            [id]: type === "checkbox" ? checked : value,
        });
        setError(null);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!item.item.trim() || !item.section.trim()) {
            setError("Du måste fylla i både produkt och avdelning.");
            setSuccessMessage(null);

            setTimeout(() => {
                setError(null);
            }, 3000);

            return;
        }

        addItem(item.item, item.section, item.isDone);
        setItem(new Item("", "", false));
        setError(null);
        setSuccessMessage("Vara tillagd!");

        setTimeout(() => {
            setSuccessMessage(null);
        }, 3000);
    };

    return (
        <>
            <Heading3>Lägg till en ny vara</Heading3>
            <form
                onSubmit={handleSubmit}
                className="max-w-[600px] mx-auto my-8 mt-4 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-2"
                >
                <input
                    type="text"
                    id="item"
                    placeholder="Ange en vara"
                    value={item.item}
                    onChange={handleChange}
                    className="px-3 py-1 sm:py-0 text-sm rounded border border-gray-300"
                />
                <input
                    type="text"
                    id="section"
                    placeholder="Ange avdelning"
                    value={item.section}
                    onChange={handleChange}
                    className="px-3 py-1 sm:py text-sm rounded border border-gray-300"
                />
                <Button
                    type="submit"
                    variant="primary"
                    aria-label="Spara"
                    >
                    Spara
                </Button>
            </form>

            {error && (<p className="text-red-500 pt-0 pb-5">{error}</p>)}
            {successMessage && (<p className="text-green-500 pt-0 pb-5">{successMessage}</p>)}
        </>
    );
};
