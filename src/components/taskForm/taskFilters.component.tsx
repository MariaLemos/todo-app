import { useFormContext } from "react-hook-form";
import styled from "styled-components";

const TaskFiltersComponent: React.FC = () => {
  const filters: Array<FilterNames> = ["all", "completed", "active"];
  const { register, getValues } = useFormContext<TaskForm>();
  return (
    <FilterToggle>
      {filters.map((filter, index) => (
        <FilterLabel
          isActive={getValues("filter") === filter}
          htmlFor={filter}
          key={index}
        >
          <input
            type="radio"
            value={filter}
            id={filter}
            {...register("filter")}
          />
          {filter}
        </FilterLabel>
      ))}
    </FilterToggle>
  );
};
export default TaskFiltersComponent;

const FilterToggle = styled.div`
  display: flex;
  gap: 1.19rem;
  justify-content: center;

  @media (max-width: 600px) {
    background-color: ${({ theme }) => theme.listBgColor};
    padding: 1rem;
    border-radius: 0.3125rem;
    box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
  }
`;
const FilterLabel = styled.label<{ isActive: boolean }>`
  font-weight: 700;
  cursor: pointer;
  color: ${({ isActive, theme }) =>
    isActive ? "hsla(220, 98%, 61%, 1)" : theme.buttonFontColor};

  &:hover {
    color: ${({ theme }) => theme.buttonHoverFontColor};
  }

  > input {
    display: none;
    visibility: hidden;
  }
`;
