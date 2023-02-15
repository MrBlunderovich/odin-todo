//import { nanoid } from "nanoid";
import "./style.css";
import Task, { TaskComponent } from "./Task";
import Project, { ProjectComponent } from "./Project";
//import ProjectComponent from "./ProjectComponent";

const state = (function () {
  let _projects = [];

  function createProject(title) {
    console.log("state.addProject invoked");
    const newProject = Project(title);
    _projects.unshift(newProject);
    GUI.refresh();
  }
  function removeProject(id) {
    console.log("state.removeProject invoked");
    _projects = _projects.filter((project) => project.id !== id);
    GUI.refresh();
  }
  function getProjects() {
    return _projects;
  }
  function loadProjects() {
    let loadedProjects = localStorage.getItem("projects");
    if (loadedProjects && _projects.length === 0) {
      console.log("loading projects from localstorage");
      loadedProjects = JSON.parse(loadedProjects);
    } else {
      console.log("nothing was loaded from localstorage");
      return;
    }
    loadedProjects = loadedProjects.map((project) => {
      let newProject = Project(project.title, project.id, project.tasks);
      newProject.tasks = newProject.tasks.map((task) => {
        return Task(
          task.projectId,
          task.title,
          task.description,
          task.dueDate,
          task.priority,
          task.isCompleted
        );
      });
      return newProject;
    });
    _projects = loadedProjects;
  }
  function selectProject(projectId) {
    //moves selected project to the start of _projects array
    console.log("state.selectProject invoked");
    const index = _projects.findIndex((project) => project.id === projectId);
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

state.loadProjects();

//////////////////////////////////////////////////////////////////////
const GUI = (function () {
  //const sidebar = document.querySelector(".sidebar");
  const projectContainer = document.querySelector(".project-container");
  const newProjectButton = document.querySelector(".new-project");
  const expandedProjectDiv = document.querySelector(".project-expanded");
  const newTaskButton = document.querySelector(".new-item");
  const projectTitle = document.querySelector(".project-expanded-title");
  const taskContainer = document.querySelector(".task-container");
  let topProject = undefined;

  expandedProjectDiv.addEventListener("click", handleProjectClicks);
  function handleProjectClicks(event) {
    if (event.target.dataset.type === "add-task") {
      console.log("GUI.createNewTask invoked");
      console.log(topProject);
      console.log(state.getProjects()[0]);
      console.log(state.getProjects()[0].newTask());
      //topProject.newTask(); //////////////////////////?????
      refresh();
    }
  }

  newProjectButton.addEventListener("click", createNewProject);
  function createNewProject() {
    console.log("GUI.createNewProject invoked");
    state.createProject("New project");
    //const newProject = Project();
  }

  projectContainer.addEventListener("click", handleSidebarClicks);
  function handleSidebarClicks(event) {
    const clickSource = event.target.dataset.type;
    if (!clickSource) {
      console.log("handleSidebarClicks failed");
      console.log(event);
      return;
    }
    if (clickSource === "project-card") {
      console.log("GUI.selectProject invoked");
      state.selectProject(event.target.dataset.id);
      refresh();
    } else if (clickSource === "del-project") {
      const projectId = event.target.dataset.projectId;
      state.removeProject(projectId);
    }
  }

  expandedProjectDiv.addEventListener("change", handleTaskInputChange);
  function handleTaskInputChange(event) {
    console.log("handleTaskInputChange invoked");
    const taskId = event.target.dataset.taskId;
    const fieldType = event.target.dataset.type;
    const targetTask = topProject.tasks.find((task) => task.id === taskId);
    targetTask[fieldType] = event.target.value;

    state.syncStorage();
  }

  function refresh() {
    console.log("GUI.refresh invoked");
    const currentProjects = state.getProjects();
    topProject = currentProjects[0];
    if (!topProject) {
      console.log("GUI.refresh failed");
      return;
    }
    projectTitle.textContent = topProject.title;
    taskContainer.innerHTML = "";
    for (let task of topProject.tasks) {
      /* const taskElement = document.createElement("li");
      taskElement.classList.add("task-item");
      taskElement.textContent = `${task.title} ${task.description} ${task.priority}`;
       */
      const taskElement = TaskComponent(task);
      taskContainer.appendChild(taskElement);
    }
    projectContainer.innerHTML = "";
    for (let project of currentProjects) {
      /* const projectCard = document.createElement("div");
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
      projectCard.appendChild(deleteProjectButton); */

      //Project.testing(project);
      //const projectCard = Project.createDOMElement(project);
      const projectCard = ProjectComponent(project);
      projectContainer.appendChild(projectCard);
    }
    state.syncStorage();

    /* document.querySelectorAll(".task-input").forEach((input) => {
      input.addEventListener("change", (event) => console.log(event));
    }); */
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
/* state.createProject("Testo1");
state.createProject("Testo2");
state.createProject("Testo3"); */
GUI.refresh();
