import { nanoid } from "nanoid";
import Task from "./Task";

export default function Project(title = "New Project") {
  let _title = title;
  const _id = nanoid();
  let _tasks = [];

  function addTask(newTask) {
    _tasks.push(newTask);
  }
  function newTask(title) {
    _tasks.push(Task(_id, title));
  }
  function removeTask(id) {
    _tasks = _tasks.filter((item) => item.id !== id);
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

export function ProjectComponent(project) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("card");
  projectCard.dataset.id = project.id;
  projectCard.dataset.type = "project-card";
  projectCard.textContent = project.title;
  const taskList = document.createElement("ul");
  for (let task of project.tasks) {
    const taskLI = document.createElement("li");
    taskLI.textContent = task.title;
    taskList.appendChild(taskLI);
  }
  projectCard.appendChild(taskList);
  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.classList.add("del-project-btn");
  deleteProjectButton.textContent = "X delete project";
  deleteProjectButton.dataset.projectId = project.id;
  deleteProjectButton.dataset.type = "del-project";
  projectCard.appendChild(deleteProjectButton);
  return projectCard;
}
