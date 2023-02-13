//import { nanoid } from "nanoid";
import "./style.css";
import Todo from "./Todo-item";
import Project from "./Project-item";

const state = (function () {
  let _projects = [];

  function createProject(title) {
    console.log("state.addProject invoked");
    const newProject = Project(title);
    _projects.unshift(newProject);
    GUI.refresh();
  }
  function removeProject(id) {
    _projects = _projects.filter((project) => project.id !== id);
    syncStorage();
  }
  function getProjects() {
    return _projects;
  }
  function loadProjects() {
    const loadedProjects = localStorage.getItem("projects");
    if (loadedProjects) {
      _projects = JSON.parse(loadedProjects);
    }
  }
  function selectProject(projectId) {
    //moves selected project to the start of _projects array
    console.log("state.selectProject invoked");
    console.log(projectId);
    const index = _projects.findIndex((project) => project.id === projectId);
    console.log(index);
    _projects.unshift(_projects.splice(index, 1)[0]);
  }
  function syncStorage() {
    localStorage.setItem("projects", JSON.stringify(_projects));
  }

  return {
    createProject,
    removeProject,
    getProjects,
    loadProjects,
    selectProject,
    syncStorage,
  };
})();
//////////////////////////////////////////////////////////////////////
const GUI = (function () {
  //const sidebar = document.querySelector(".sidebar");
  const projectContainer = document.querySelector(".project-container");
  const newProjectButton = document.querySelector(".new-project");
  //const expandedProjectDiv = document.querySelector(".project-expanded");
  const newTaskButton = document.querySelector(".new-item");
  const projectTitle = document.querySelector(".project-expanded-title");
  const taskContainer = document.querySelector(".task-container");
  let projectZero = undefined;

  newTaskButton.addEventListener("click", createNewTask);
  function createNewTask() {
    console.log("GUI.createNewTask invoked");
    projectZero.newTask();
    refresh();
  }

  newProjectButton.addEventListener("click", createNewProject);
  function createNewProject() {
    console.log("GUI.createNewProject invoked");
    state.createProject("New project");
    //const newProject = Project();
  }

  projectContainer.addEventListener("click", selectProject);
  function selectProject(event) {
    console.log("GUI.selectProject invoked");
    state.selectProject(event.target.dataset.id);
    refresh();
  }

  function refresh() {
    console.log("GUI.refresh invoked");
    const currentProjects = state.getProjects();
    projectZero = currentProjects[0];
    if (!projectZero) {
      console.log("GUI.refresh failed");
    }
    projectTitle.textContent = projectZero.title;
    taskContainer.innerHTML = "";
    for (let task of projectZero.tasks) {
      const taskElement = document.createElement("li");
      taskElement.classList.add("task-item");
      taskElement.textContent = `${task.title} ${task.description} ${task.priority}`;
      taskContainer.appendChild(taskElement);
    }
    projectContainer.innerHTML = "";
    for (let project of currentProjects) {
      const projectCard = document.createElement("div");
      projectCard.classList.add("card");
      projectCard.dataset.id = project.id;
      projectCard.textContent = project.title;
      projectContainer.appendChild(projectCard);
    }
    state.syncStorage();
  }

  return {
    refresh,
    //
  };
})();

/* state.loadProjects();
console.log(state.getProjects()); */
/* const testProject = Project("Testo");
const testProject2 = Project("Testo2");
const testProject3 = Project("Testo3"); */
//testProject.addTask(Todo(testProject.id));
state.createProject("Testo1");
state.createProject("Testo2");
state.createProject("Testo3");
console.log(state.getProjects()[0].title);
GUI.refresh();
