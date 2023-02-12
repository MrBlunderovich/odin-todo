import { nanoid } from "nanoid";
export default function Todo(title, description, dueDate, priority) {
  const taskState = {
    id: nanoid(),
    title,
    description,
    dueDate,
    priority,
    isCompleted,
  };
  //generate id?
  return {
    id,
    title,
    description,
    dueDate,
    priority,
  };
}
