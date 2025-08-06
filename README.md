# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar på skärmen och markeras som klar i javascript-listan.
- Ni behöver använda localStorage så att listan inte börjar om från början varje gång sidan används.
- Ni behöver använda er av en komponent.
- Ni behöver använda er av state med en lista med objekt.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk, t.ex. tailwind eller material ui.
- Ni behöver ha minst tre komponenter.
- Ni måste använda Lifting State Up.

## Allmänt

Projektet är ett vite-projekt. D.v.s. ni måste köra:

npm i
och
npm run dev 

## Komponenthierarki 

ShoppingList                <-- Parent (root för listan och state)

├── ItemForm                <-- Child (formulär för att lägga till ny vara)

├── SortButtons             <-- Child (knappar för sortering)

├── ShoppingListView        <-- Child (renderar listan)

│   ├── ShoppingListItem    <-- Grandchild (enskilda listobjekt)

│   ├── ShoppingListItem

│   └── ...      

## Slutbetyg
<img width="1014" height="280" alt="betyg" src="https://github.com/user-attachments/assets/db6b0f43-ed8f-4a89-ad58-ff672694d0c9" />


├── CompletedItems          <-- Child (visar avklarade varor)

└── EditMode                <-- Child (redigeringsläge, visas när man trycker på ändra-knappen)
