import React from "react";
import type { SortOption } from "../hooks/useSortedItems";
import Button from "../style/Button";

type SortButtonsProps = {
  onSortChange: (field: SortOption["field"]) => void;
  sortOption: SortOption;
};

export const SortButtons = React.memo(({ onSortChange, sortOption }: SortButtonsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4 mb-4">
      <Button
        variant="secondary"
        onClick={() => onSortChange("item")}
        aria-label="Sortera på namn"
        className={sortOption.field === "item" ? "bg-[#345D44]" : ""}
      >
        Sortera på namn{" "}
        {sortOption.field === "item" && (
          <span>{sortOption.direction === "asc" ? "↑" : "↓"}</span>
        )}
      </Button>

      <Button
        variant="secondary"
        onClick={() => onSortChange("section")}
        aria-label="Sortera på avdelning"
        className={sortOption.field === "section" ? "bg-[#345D44]" : ""}
      >
        Sortera på avdelning{" "}
        {sortOption.field === "section" && (
          <span>{sortOption.direction === "asc" ? "↑" : "↓"}</span>
        )}
      </Button>

      <Button
        variant="secondary"
        onClick={() => onSortChange(null)}
        aria-label="Töm sortering"
      >
        Töm sortering
      </Button>
    </div>
  );
});