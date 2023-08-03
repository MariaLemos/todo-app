type ThemeName = "light" | "dark";
type Task = { name: string; isDone: boolean };
type TaskForm = { newTask: Task; tasks: Task[] };
type FilterNames = "all" | "active" | "completed";
