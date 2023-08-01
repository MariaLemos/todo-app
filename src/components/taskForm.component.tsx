import { useFieldArray, useFormContext } from "react-hook-form";
import styled from "styled-components";
import TaskComponent from "./task.component";
import TaskListComponent from "./tasklist";
import { useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const TaskFormComponent: React.FC = () => {
  const methods = useFormContext<TaskForm>();
  const { watch, getValues } = methods;

  const { fields, append, swap } = useFieldArray({
    control: methods.control, // control props comes from useForm (optional: if you are using FormContext)
    name: "tasks", // unique name for your Field Array
  });
  useEffect(() => {
    console.log(watch());
    localStorage.setItem("tasks", JSON.stringify(getValues("tasks")));
  }, [watch("tasks"), getValues]);

  const handleDrag = ({ source, destination }: DropResult) => {
    if (destination) {
      swap(source.index, destination.index);
    }
  };
  return (
    <>
      <NewTask
        addTask={(newTask: Task) => append(newTask, { shouldFocus: false })}
        name="newTask"
      />
      <DragDropContext onDragEnd={handleDrag}>
        <TaskListComponent tasks={fields} />
      </DragDropContext>
    </>
  );
};
export default TaskFormComponent;
const NewTask = styled(TaskComponent)`
  border-radius: 0.3125rem;
  box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.shadowColor};
`;
