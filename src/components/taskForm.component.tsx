import { useFieldArray, useFormContext } from "react-hook-form";
import styled from "styled-components";

import TaskComponent from "./task.component";
import TaskListComponent from "./tasklist";
import { useEffect } from "react";

const TaskFormComponent: React.FC<{}> = ({}) => {
  const methods = useFormContext<TaskForm>();
  const { watch, getValues } = methods;

  const { fields, append } = useFieldArray({
    control: methods.control, // control props comes from useForm (optional: if you are using FormContext)
    name: "tasks", // unique name for your Field Array
  });
  useEffect(() => {
    console.log(watch());
    localStorage.setItem("tasks", JSON.stringify(getValues("tasks")));
  }, [watch("tasks")]);
  return (
    <>
      <NewTask
        addTask={(newTask: Task) => append(newTask, { shouldFocus: false })}
        mode="newTask"
        name="newTask"
      />
      <TaskListComponent tasks={fields} />
    </>
  );
};
export default TaskFormComponent;
const NewTask = styled(TaskComponent)`
  border-radius: 0.3125rem;
`;
