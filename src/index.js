//import { nanoid } from "nanoid";
import "./style.css";
import Todo from "./Todo-item";
import Project from "./Project-item";

const state = (function () {
  let _projects = [];
  function addProject(project) {
    _projects.push(project);
    localStorage.setItem("projects", JSON.stringify(_projects));
  }
  function removeProject(id) {
    _projects = _projects.filter((project) => project.id !== id);
    localStorage.setItem("projects", JSON.stringify(_projects));
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
  return { addProject, removeProject, getProjects, loadProjects };
})();

const GUI = (function () {
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".main");
  //const projectExpanded = document.querySelector(".project-expanded");
  const newProjectButton = document.querySelector(".new-project");
  const expandedProjectDiv = document.createElement("div");
  expandedProjectDiv.classList.add("project-expanded");
  expandedProjectDiv.innerHTML = `
          <h2 class="project-expanded-title">New project</h2>
          <div class="todo-item">X item01</div>
          <div class="todo-item">X item02</div>
  `;
  const newTaskButton = document.createElement("button");
  newTaskButton.classList.add("todo-item", "new-item");
  newTaskButton.textContent = "+ Add task";
  main.appendChild(expandedProjectDiv);
  newTaskButton.addEventListener("click", createNewTask);
  expandedProjectDiv.appendChild(newTaskButton);
  function createNewTask() {
    console.log("createNewTask invoked");
  }

  newProjectButton.addEventListener("click", createNewProject);
  function createNewProject() {
    console.log("createNewProject invoked");
    const newProject = Project();
    //main.innerHTML = newProject.getExpandedProjectDiv();
  }

  return {
    //
  };
})();

function prueba() {
  const nuevoProyecto = Project("testPrj");
  state.addProject(nuevoProyecto);
  console.log(state.getProjects());
}
/* state.loadProjects();
console.log(state.getProjects()); */
