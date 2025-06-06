/* Default objekt som ligger i listan från start */

import { Item } from "./Items";

export const defaultItems: Item[] = [
    new Item("Mjölk", "Mejeri", false),
    new Item("Bröd", "Bageri", false), 
    new Item("Ägg", "Kylvaror", false),
    new Item("Ost", "Mejeri", false),
    new Item("Smör", "Mejeri", false),
    new Item("Kaffe", "Torrvaror", false),
    new Item("Frukt", "Frukt & Grönt", false),
    new Item("Pasta", "Torrvaror", false),
    new Item("Ris", "Torrvaror", false),
    new Item("Tomatsås", "Konserver", false),
    new Item("Grönsaker", "Frukt & Grönt", false)
];