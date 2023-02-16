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
  const projectsContainer = document.querySelector(".project-container");
  const newProjectButton = document.querySelector(".new-project");
  const expandedProjectDiv = document.querySelector(".project-expanded");
  const projectTitle = document.querySelector(".project-expanded-title");
  const taskContainer = document.querySelector(".task-container");
  const completedTaskContainer = document.querySelector(
    ".completed-task-container"
  );
  let topProject = undefined;

  expandedProjectDiv.addEventListener("click", handleProjectClicks);
  function handleProjectClicks(event) {
    if (event.target.dataset.type === "add-task") {
      createNewTask();
    } else if (event.target.dataset.type === "delete-task") {
      console.log("GUI deleting task");
      topProject.removeTask(event.target.dataset.taskId);
      refresh();
    }
  }
  function createNewTask() {
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
  }

  newProjectButton.addEventListener("click", createNewProject);
  function createNewProject() {
    console.log("GUI.createNewProject invoked");
    state.createProject("New project");
    //const newProject = Project();
  }

  projectsContainer.addEventListener("click", handleSidebarClicks);
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
        refresh();
      } else {
        console.warn("no project to change title of");
      }
    } else {
      handleTaskInputChange(event);
      //special refresh?
    }
  }
  function handleTaskInputChange(event) {
    console.log("handleTaskInputChange invoked");
    console.log(event);
    console.log(event.target.value);
    const taskId = event.target.dataset.taskId;
    const fieldType = event.target.dataset.type;
    const targetTask = topProject.tasks.find((task) => task.id === taskId);
    if (fieldType === "isCompleted") {
      targetTask.isCompleted = event.target.checked;
      refresh();
    } else {
      console.log({ fieldType });
      targetTask[fieldType] = event.target.value;
      console.log(targetTask);
      console.log(state.getProjects()[0].tasks[0]);
      refresh("exceptTasks");
    }
    //state.syncStorage();
  }

  expandedProjectDiv.addEventListener("keyup", handleKeyUp);
  function handleKeyUp(event) {
    event.stopPropagation();
    if (event.keyCode === 13) {
      //make input lose focus and so trigger 'change' events
      event.target.blur();
      if (event.ctrlKey && topProject) {
        createNewTask();
      }
    }
  }

  function refresh(exception) {
    console.log("GUI.refresh invoked");
    const currentProjects = state.getProjects();
    topProject = currentProjects[0];
    if (exception !== "exceptTasks") {
      taskContainer.innerHTML = "";
      completedTaskContainer.innerHTML = "";
      if (!topProject) {
        console.warn("GUI.refresh: no projects available");
        projectTitle.value = "Let's start a new project!";
        //return;
      } else {
        projectTitle.value = topProject.title;
        for (let task of topProject.tasks) {
          const taskElement = TaskComponent(task);
          if (task.isCompleted) {
            completedTaskContainer.appendChild(taskElement);
          } else {
            taskContainer.appendChild(taskElement);
          }
        }
      }
    }
    projectsContainer.innerHTML = "";
    for (let project of currentProjects) {
      const projectCard = ProjectComponent(project);
      projectsContainer.appendChild(projectCard);
    }
    state.syncStorage();
    ////
    document.querySelector(".testOutput").textContent = JSON.stringify(
      state.getProjects()[0].tasks.map((task) => task.isCompleted)
    );
  }

  return {
    refresh,
    //
  };
})();

GUI.refresh();
