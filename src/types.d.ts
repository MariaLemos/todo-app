type ThemeName = "light" | "dark";

type Task = { name: string; isDone: boolean };
type FilterNames = "all" | "active" | "completed";

type TaskForm = {
  newTask: Task;
  tasks: Task[];
  filter: FilterNames;
};
