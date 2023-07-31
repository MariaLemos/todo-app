import { FieldArrayWithId } from "react-hook-form";
import styled from "styled-components";

import TaskComponent from "./task.component";

const TaskListComponent: React.FC<{
  tasks: FieldArrayWithId<
    {
      tasks: Task[];
    },
    "tasks",
    "id"
  >[];
}> = ({ tasks }) => {
  return (
    <TaskListWrapper>
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          name={`tasks.${index}`}
          mode={"editTask"}
          addTask={console.log}
        />
      ))}
    </TaskListWrapper>
  );
};
export default TaskListComponent;
const TaskListWrapper = styled.div`
  margin-top: 1.5rem;
  border-radius: 0.3125rem;
  overflow: hidden;
`;
const Task = styled(TaskComponent)`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  &:last-child {
    border-bottom: none;
  }
`;
