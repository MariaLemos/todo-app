import { UseFormReturn } from "react-hook-form";
import styled from "styled-components";
import check from "../assets/icon-check.svg";

const RadioComponent: React.FC<{
  methods: UseFormReturn<TaskForm, any, undefined>;
  name: "newTask.isDone" | `tasks.${number}.isDone`;
}> = ({ methods, name }) => {
  return <RadioStyled {...methods.register(name)} type="checkbox" />;
};
export default RadioComponent;

const RadioStyled = styled.input`
  all: unset;
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.borderColor};
  &:checked {
    background-image: url(${check});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
