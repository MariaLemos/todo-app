import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import RadioComponent from "../commons/radio";

const TaskComponent: React.FC<{
  addTask: (task: Task) => void;
  mode: "newTask" | "editTask";
  name: "newTask" | `tasks.${number}`;
  className?: string;
}> = ({ addTask, name, mode, className }) => {
  const methods = useFormContext<TaskForm>();
  const { register, getValues, setValue } = methods;
  function drag(ev: any) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  return (
    <TaskWrapper
      className={className}
      draggable="true"
      onDragStart={(event) => drag(event)}
      onSubmit={async (e) => {
        e.preventDefault();
        const values = getValues("newTask");
        addTask(values);
        if (mode === "newTask") {
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
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
`;

const InputStyled = styled.input`
  all: unset;
  width: 100%;
`;
