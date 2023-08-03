import styled from "styled-components";

const TaskFiltersComponent: React.FC<{
  selectedFilter: FilterNames;
  setSelectedFilter: React.Dispatch<React.SetStateAction<FilterNames>>;
}> = ({ selectedFilter, setSelectedFilter }) => {
  const filters: Array<FilterNames> = ["all", "completed", "active"];

  return (
    <FilterToggle>
      {filters.map((filter) => (
        <FilterButton
          isActive={filter === selectedFilter}
          onClick={() => {
            setSelectedFilter(filter);
          }}
        >
          {filter}
        </FilterButton>
      ))}
    </FilterToggle>
  );
};
export default TaskFiltersComponent;

const FilterToggle = styled.div`
  display: flex;
  gap: 1.19rem;
  @media (max-width: 500px) {
    position: absolute;
    top: 5rem;
    background-color: ${({ theme }) => theme.listBgColor};
  }
`;
const FilterButton = styled.button<{ isActive: boolean }>`
  color: ${({ isActive, theme }) =>
    isActive ? "hsla(220, 98%, 61%, 1)" : theme.buttonFontColor};
`;
