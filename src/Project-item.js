import { nanoid } from "nanoid";
export default function Project() {
  let _title = "New project";
  const _id = nanoid();
  let _todos = [];

  function getId() {
    return _id;
  }
  function getTitle() {
    return _title;
  }
  function setTitle(newtitle) {
    _title = newtitle;
  }
  function getTodos() {
    return _todos;
  }
  function addTodo(newTodo) {
    _todos.push(newTodo);
  }
  function removeTodo(todo) {
    _todos = _todos.filter((item) => item !== todo);
  }

  return {
    id: getId(),
    title: getTitle(),
    todos: getTodos(),
    setTitle,
    addTodo,
    removeTodo,
  };
}
