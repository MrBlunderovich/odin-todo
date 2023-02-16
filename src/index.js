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
    console.log("uploading projects to localStorage");
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
  const projectContainer = document.querySelector(".project-container");
  const newProjectButton = document.querySelector(".new-project");
  const expandedProjectDiv = document.querySelector(".project-expanded");
  const projectTitle = document.querySelector(".project-expanded-title");
  const taskContainer = document.querySelector(".task-container");
  let topProject = undefined;

  expandedProjectDiv.addEventListener("click", handleProjectClicks);
  function handleProjectClicks(event) {
    if (event.target.dataset.type === "add-task") {
      console.log("GUI.createNewTask invoked");
      if (!topProject) {
        console.log("no projects yet");
        createNewProject();
      }
      topProject.newTask();
      refresh();
      document
        .querySelector(".task-container .task-item:last-child input.task-title")
        .select();
    } else if (event.target.dataset.type === "delete-task") {
      console.log("GUI deleting task");
      topProject.removeTask(event.target.dataset.taskId);
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
      console.warn("handleSidebarClicks failed");
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

  expandedProjectDiv.addEventListener("change", handleProjectInputChange);
  function handleProjectInputChange(event) {
    if (event.target.id === "project-expanded-title") {
      console.log("changing project title");
      if (topProject) {
        topProject.title = event.target.value;
      } else {
        console.warn("no project to change title of");
      }
    } else {
      handleTaskInputChange(event);
    }
    refresh();
  }
  function handleTaskInputChange(event) {
    console.log("handleTaskInputChange invoked");
    const taskId = event.target.dataset.taskId;
    const fieldType = event.target.dataset.type;
    const targetTask = topProject.tasks.find((task) => task.id === taskId);
    targetTask[fieldType] = event.target.value;
  }

  expandedProjectDiv.addEventListener("keyup", handleKeyUp);
  function handleKeyUp(event) {
    if (event.keyCode === 13) {
      event.target.blur();
    }
  }

  function refresh() {
    console.log("GUI.refresh invoked");
    const currentProjects = state.getProjects();
    topProject = currentProjects[0];
    taskContainer.innerHTML = "";
    if (!topProject) {
      console.warn("GUI.refresh: no projects available");
      projectTitle.value = "Let's start a new project!";
      //return;
    } else {
      projectTitle.value = topProject.title;
      //taskContainer.innerHTML = "";
      for (let task of topProject.tasks) {
        const taskElement = TaskComponent(task);
        taskContainer.appendChild(taskElement);
      }
    }
    projectContainer.innerHTML = "";
    for (let project of currentProjects) {
      const projectCard = ProjectComponent(project);
      projectContainer.appendChild(projectCard);
    }
    state.syncStorage();
  }

  return {
    refresh,
    //
  };
})();

GUI.refresh();
