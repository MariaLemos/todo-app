import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import RadioComponent from "../commons/radio";
import { DraggableProvided } from "react-beautiful-dnd";

const TaskComponent: React.FC<{
  addTask?: (task: Task) => void;
  name: "newTask" | `tasks.${number}`;
  className?: string;
  provided?: DraggableProvided;
}> = ({ addTask, name, className, provided }) => {
  const methods = useFormContext<TaskForm>();
  const { register, getValues, setValue } = methods;

  return (
    <TaskWrapper
      className={className}
      ref={provided?.innerRef}
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
      onSubmit={async (e) => {
        e.preventDefault();

        if (addTask) {
          const values = getValues("newTask");
          addTask(values);
          setValue("newTask.isDone", false);
          setValue("newTask.name", "");
        }
      }}
    >
      <RadioComponent name={`${name}.isDone`} methods={methods} />

      <InputStyled {...register(`${name}.name`)} />
    </TaskWrapper>
  );
};
export default TaskComponent;
const TaskWrapper = styled.form`
  display: flex;
  gap: 1.5rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.listBgColor};
  padding: 1.25rem;
  width: 100%;
`;

const InputStyled = styled.input`
  all: unset;
`;
