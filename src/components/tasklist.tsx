import { FieldArrayWithId } from "react-hook-form";
import styled from "styled-components";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import TaskComponent from "./task.component";

const TaskListComponent: React.FC<{
  tasks: FieldArrayWithId<
    {
      tasks: Task[];
    },
    "tasks",
    "id"
  >[];
  handleDrag: (dropResult: DropResult) => void;
}> = ({ tasks, handleDrag }) => {
  return (
    <DragDropContext onDragEnd={handleDrag}>
      <Droppable droppableId="test-items">
        {(provided, snapshot) => (
          <TaskListWrapper {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided, snapshot) => (
                  <Task
                    name={`tasks.${index}`}
                    isDragging={snapshot.isDragging}
                    provided={provided}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </TaskListWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default TaskListComponent;
const TaskListWrapper = styled.div`
  margin: 1.5rem 0;
  border-radius: 0.3125rem;
  overflow: hidden;
`;
const Task = styled(TaskComponent)<{ isDragging: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  &:last-child {
    border-bottom: none;
  }

  box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.shadowColor};
`;
