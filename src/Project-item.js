import { nanoid } from "nanoid";
import Todo from "./Todo-item";
export default function Project(title = "New Project") {
  let _title = title;
  const _id = nanoid();
  let _tasks = [];

  function addTask(newTask) {
    _tasks.push(newTask);
  }
  function newTask(title) {
    _tasks.push(Todo(_id, title));
  }
  function removeTask(task) {
    _tasks = _tasks.filter((item) => item !== task);
  }

  return {
    get id() {
      return _id;
    },
    get title() {
      return _title;
    },
    set title(newTitle) {
      title = newTitle;
    },
    get tasks() {
      return _tasks;
    },
    addTask,
    removeTask,
    newTask,
  };
}
