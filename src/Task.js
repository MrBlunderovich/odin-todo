import { nanoid } from "nanoid";

export default function Task(
  projectId,
  title = "Task title",
  description = "Description",
  dueDate = new Date(),
  priority = "medium-priority"
) {
  const _id = nanoid();
  let _projectId = projectId;
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;
  let _isCompleted = false;

  return {
    get id() {
      return _id;
    },
    get projectId() {
      return _projectId;
    },
    get title() {
      return _title;
    },
    set title(newTitle) {
      _title = newTitle;
    },
    get description() {
      return _description;
    },
    set description(newDescription) {
      _description = newDescription;
    },
    get dueDate() {
      return _dueDate;
    },
    set dueDate(newDueDate) {
      _dueDate = newDueDate;
    },
    get priority() {
      return _priority;
    },
    set priority(newPriority) {
      _priority = newPriority;
    },
    get isCompleted() {
      return _isCompleted;
    },
    set isCompleted(newIsCompleted) {
      _isCompleted = newIsCompleted;
    },
  };
}

export function TaskComponent1(task) {
  const taskElement = document.createElement("li");
  taskElement.classList.add("task-item");

  const titleElement = document.createElement("input");
  titleElement.classList.add("task-title", "task-input");
  titleElement.value = task.title;
  const descriptionElement = document.createElement("input");
  descriptionElement.classList.add("task-deacription", "task-input");
  descriptionElement.value = task.description;
  const dateElement = document.createElement("input");
  dateElement.classList.add("task-date", "task-input");
  dateElement.value = task.dueDate;
  const priorityElement = document.createElement("input");
  priorityElement.classList.add("task-priority", "task-input");
  priorityElement.value = task.priority;
  taskElement.appendChild(titleElement);
  taskElement.appendChild(descriptionElement);
  taskElement.appendChild(dateElement);
  taskElement.appendChild(priorityElement);
  return taskElement;
}
export function TaskComponent(task) {
  const taskElement = document.createElement("li");
  taskElement.classList.add("task-item");
  taskElement.innerHTML = `
  <input type="text" class="task-input task-title" value="${task.title}"/>
  <input type="text" class="task-input task-deacription" value="${task.description}"/>
  <input type="text" class="task-input task-date" value="${task.dueDate}"/>
  <input type="text" class="task-input task-priority" value="${task.priority}"/>
`;

  return taskElement;
}
