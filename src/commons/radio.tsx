import { UseFormReturn } from "react-hook-form";
import styled from "styled-components";
import check from "../assets/icon-check.svg";
import hoverBg from "../assets/border-radius.svg";

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
  cursor: pointer;

  transition: all 0.2s;
  &:checked {
    background: url(${check}), linear-gradient(120deg, #55ddff, #c058f3);
    background-repeat: no-repeat;
    background-position: center;
  }
  &:hover {
    background: url(${hoverBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
