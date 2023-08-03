import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import RadioComponent from "../../commons/radio";
import { DraggableProvided } from "react-beautiful-dnd";
import { ReactComponent as IconDelete } from "../../assets/icon-cross.svg";

const TaskComponent: React.FC<{
  addTask?: (task: Task) => void;
  name: "newTask" | `tasks.${number}`;
  className?: string;
  provided?: DraggableProvided;
  removeTask?: () => void;
}> = ({ removeTask, addTask, name, className, provided }) => {
  const methods = useFormContext<TaskForm>();
  const { register, getValues, setValue } = methods;

  return (
    <TaskWrapper
      className={className}
      ref={provided?.innerRef}
      isDone={getValues(`${name}.isDone`)}
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

      <InputStyled
        {...register(`${name}.name`)}
        placeholder="Create a new todo…"
        required
      />
      {removeTask && (
        <DeleteButton onClick={removeTask}>
          <IconDelete />
        </DeleteButton>
      )}
    </TaskWrapper>
  );
};
export default TaskComponent;
const TaskWrapper = styled.form<{ isDone: boolean }>`
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  gap: 1.5rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.listBgColor};
  padding: 1.25rem;
  width: 100%;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
  color: ${({ isDone, theme }) => (isDone ? theme.doneFontColor : "inherit")};
`;

const InputStyled = styled.input`
  all: unset;
  cursor: text !important;
`;
const DeleteButton = styled.button`
  padding: 0.25rem;
`;
