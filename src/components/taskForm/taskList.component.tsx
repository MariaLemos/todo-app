import {
  FieldArrayWithId,
  UseFieldArrayRemove,
  useFormContext,
} from "react-hook-form";
import styled, { css } from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import TaskComponent from "../task/task.component";
import { useState } from "react";
import TaskFiltersComponent from "./taskFilters.component";
import useIsMobile from "../../commons/isMobile";

type TaskField = FieldArrayWithId<
  {
    tasks: Task[];
  },
  "tasks",
  "id"
>;

const TaskListComponent: React.FC<{
  tasks: TaskField[];
  removeAction: UseFieldArrayRemove;
}> = ({ tasks, removeAction }) => {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const activeTasks = tasks.filter((task) => !task.isDone) ?? [];
  const { setValue } = useFormContext<TaskForm>();
  const isMobile = useIsMobile();

  return (
    <TaskListWrapper>
      <Droppable droppableId="task-items">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => {
              const shouldShowActiveTask =
                !task.isDone && filter !== "completed";
              const shouldShowCompletedTask =
                task.isDone && filter !== "active";
              if (!shouldShowActiveTask && !shouldShowCompletedTask) {
                return null;
              }
              return (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => {
                    return (
                      <Task
                        name={`tasks.${index}`}
                        isDragging={snapshot.isDragging}
                        provided={provided}
                        removeTask={() => removeAction(index)}
                      />
                    );
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <ActionsWrapper>
        <span>{`${activeTasks.length} items left`}</span>
        {!isMobile && (
          <TaskFiltersComponent
            setSelectedFilter={setFilter}
            selectedFilter={filter}
          />
        )}
        <ClearButton
          onClick={() => {
            setValue("tasks", activeTasks);
          }}
        >
          Clear Completed
        </ClearButton>
      </ActionsWrapper>
    </TaskListWrapper>
  );
};
export default TaskListComponent;
const TaskListWrapper = styled.div`
  margin: 1.5rem 0;
  border-radius: 0.3125rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.listBgColor};
  padding-bottom: 0.25rem;
  box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.shadowColor};
`;
const Task = styled(TaskComponent)<{ isDragging: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
  ${({ isDragging, theme }) => {
    if (isDragging) {
      return css`
        box-shadow: 0px 35px 50px -15px ${theme.shadowColor};
      `;
    }
  }}
`;
const ActionsWrapper = styled.div`
  padding: 1rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
  span {
    color: ${({ theme }) => theme.buttonFontColor};
    font-size: 0.875rem;
    letter-spacing: -0.01213rem;
  }
`;

const ClearButton = styled.button``;
