import type { FilterSearchProps } from "../../../types/Filters";
import { FilterGroup, SearchInput } from "../Filters.styles";

const FilterSearch: React.FC<FilterSearchProps> = ({ search, setSearch }) => {
  return (
    <FilterGroup>
      <SearchInput
        type="text"
        placeholder="Wyszukaj"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </FilterGroup>
  );
};

export default FilterSearch;
