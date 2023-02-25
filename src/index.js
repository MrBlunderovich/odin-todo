//import { nanoid } from "nanoid";
import "./style.css";
import Task from "./Task";
import { TaskComponent, DescriptionModal, TaskExpanded } from "./TaskComponent";
import Project from "./Project";
import { ProjectComponent } from "./ProjectComponent";
import { isPast, isToday, endOfDay } from "date-fns";

const state = (function () {
  let _projects = [];

  function createProject(title, tasks = [], isPseudo = false) {
    console.log("state.addProject invoked");
    const newProject = Project(title, undefined, tasks, isPseudo);
    _projects.unshift(newProject);
    GUI.refresh();
    if (!newProject.isPseudo) {
      GUI.createNewTask();
    }
  }
  function removeProject(id) {
    console.log("state.removeProject invoked");
    _projects = _projects.filter((project) => project.id !== id);
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
          new Date(task.dueDate),
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
  function getTaskById(taskId) {
    console.log("state.getTaskById invoked");
    for (let project of _projects) {
      const result = project.tasks.find((task) => task.id === taskId);
      if (result) {
        return result;
      }
    }
  }
  function getProjectById(projectId) {
    console.log("state.getProjectById invoked");
    return _projects.find((project) => project.id === projectId);
  }
  function syncStorage() {
    console.log("uploading projects to localStorage");
    localStorage.setItem("projects", JSON.stringify(_projects));
  }
  function clearPseudoProjects() {
    _projects = _projects.filter((project) => !project.isPseudo);
  }

  return {
    createProject,
    removeProject,
    getProjects,
    loadProjects,
    selectProject,
    syncStorage,
    getTaskById,
    getProjectById,
    clearPseudoProjects,
  };
})();

state.loadProjects();

//////////////////////////////////////////////////////////////////////
const GUI = (function () {
  const projectsContainer = document.querySelector(".project-container");
  const newProjectButton = document.querySelector(".new-project");
  const overdueProjectButton = document.querySelector(".overdue");
  const todayProjectButton = document.querySelector(".today");
  const expandedProjectDiv = document.querySelector(".project-expanded");
  const projectTitle = document.querySelector(".project-expanded-title");
  const taskContainer = document.querySelector(".task-container");
  const completedTaskContainer = document.querySelector(
    ".completed-task-container"
  );
  const addButtonContainer = document.querySelector(".add-container");
  let topProject = undefined;

  expandedProjectDiv.addEventListener("click", handleProjectClicks);
  function handleProjectClicks(event) {
    if (event.target.dataset.type === "add-task") {
      createNewTask();
    } else if (event.target.dataset.type === "description") {
      openModal(event);
    }
  }
  //TODO move following function to state?
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
  function openModal(event) {
    const taskId = event.target.dataset.taskId;
    const task = state.getTaskById(taskId);
    document.body.appendChild(DescriptionModal(task));
    document.querySelector(".description-modal-textarea").focus();
  }

  newProjectButton.addEventListener("click", createNewProject);
  function createNewProject() {
    console.log("GUI.createNewProject invoked");
    state.createProject("New project");
  }
  overdueProjectButton.addEventListener("click", overduePseudoProject);
  function overduePseudoProject() {
    console.log("GUI.overduePseudoProject invoked");
    state.clearPseudoProjects();
    const overdueTasks = [];
    state.getProjects().forEach((project) => {
      project.tasks.forEach((task) => {
        if (isPast(endOfDay(task.dueDate))) {
          overdueTasks.push(task);
        }
      });
    });
    state.createProject("Overdue tasks", overdueTasks, true);
    //////////////////////////////////////////////////////////////////
  }
  todayProjectButton.addEventListener("click", todayPseudoProject);
  function todayPseudoProject() {
    console.log("GUI.todayPseudoProject invoked");
    state.clearPseudoProjects();
    const todayTasks = [];
    state.getProjects().forEach((project) => {
      project.tasks.forEach((task) => {
        if (isToday(task.dueDate)) {
          todayTasks.push(task);
        }
      });
    });
    state.createProject("Tasks for today", todayTasks, true);
  }

  projectsContainer.addEventListener("click", handleSidebarClicks);
  function handleSidebarClicks(event) {
    const clickSource = event.target.dataset.type;
    const projectId = event.target.dataset.projectId;
    const targetProject = state.getProjectById(projectId);
    if (clickSource === "del-project") {
      if (
        event.ctrlKey ||
        confirm(`Please confirm removing "${targetProject.title}" project`)
      ) {
        state.removeProject(projectId);
        refresh();
      }
    } else if (clickSource === "task-complete") {
      /* const taskId = event.target.dataset.id;
      console.log(taskId);
      const targetTask = state.getTaskById(taskId);
      console.log(targetTask);
      targetTask.isCompleted = true;
      refresh(); */
    } else if (event.target.id !== "project-container") {
      console.log("GUI.selectProject invoked");
      state.selectProject(projectId);
      state.clearPseudoProjects();
      refresh();
    }
  }

  expandedProjectDiv.addEventListener("change", handleProjectInputChange);
  function handleProjectInputChange(event) {
    if (event.target.id === "project-expanded-title") {
      console.log("changing project title");
      if (topProject) {
        topProject.title = capitalize(event.target.value);
        refresh();
      } else {
        console.warn("no project to change title of");
      }
    } else {
      handleTaskInputChange(event);
    }
  }
  function handleTaskInputChange(event) {
    console.log("handleTaskInputChange invoked");
    return;
    const taskId = event.target.dataset.taskId;
    const fieldType = event.target.dataset.type;
    const targetTask = topProject.tasks.find((task) => task.id === taskId);
    if (fieldType === "isCompleted") {
      targetTask.isCompleted = event.target.checked;
      refresh();
    } else {
      if (fieldType === "title") {
        targetTask[fieldType] = capitalize(event.target.value);
      } else if (fieldType === "dueDate") {
        targetTask[fieldType] = event.target.valueAsDate;
        refresh();
      } else {
        targetTask[fieldType] = event.target.value;
      }
      refresh("exceptTasks");
    }
  }

  //check this
  /* expandedProjectDiv.addEventListener("keyup", handleKeyUp);
  function handleKeyUp(event) {
    event.stopPropagation();
    if (event.keyCode === 13) {
      if (event.target.dataset.type === "description") {
        openModal(event);
        return;
      }
      //make input lose focus and so trigger 'change' events
      event.target.blur();
      if (event.ctrlKey && topProject) {
        createNewTask();
      }
    }
  } */
  ///////////////////////////////////////////////++++++++++++++++++++KEY
  document.addEventListener("keyup", handleDocumentKeyUp);
  function handleDocumentKeyUp(event) {
    if (
      event.keyCode === 13 && //enter
      event.ctrlKey &&
      event.target.id === "description-textarea"
    ) {
      saveDescription(event);
    } else if (
      event.keyCode === 27 && //escape
      event.target.id === "description-textarea"
    ) {
      closeExpandedTasks();
    }
  }
  ///////////////////////////////////////////////++++++++++++++++++++CLICK
  document.addEventListener("click", handleDocumentClick);
  function handleDocumentClick(event) {
    if (event.target.dataset.expander) {
      closeExpandedTasks();
      expandTask(event);
    }
    if (event.target.dataset.type === "delete-task") {
      deleteTask(event);
    }
    if (event.target.dataset.type === "complete-task") {
      completeTask(event);
    }
    if (true) {
      //do stuff
    }
  }

  function deleteTask(event) {
    console.log("GUI deleting task");
    if (event.ctrlKey || confirm("Please confirm deleting task")) {
      topProject.removeTask(event.target.dataset.taskId);
      refresh();
    }
  }

  function completeTask(event) {
    console.log("GUI completing task");
    const taskId = event.target.dataset.taskId;
    const targetTask = state.getTaskById(taskId);
    targetTask.isCompleted = !targetTask.isCompleted;
    refresh();
  }

  function saveDescription(event) {
    console.log("GUI saving description");
    const taskId = event.target.dataset.taskId;
    const textAreaValue = event.target.value;
    console.log(textAreaValue);
    state.getTaskById(taskId).description = textAreaValue;
    refresh();
  }

  /* function closeModal() {
    document.body.removeChild(
      document.querySelector(".description-modal-container")
    );
  } */

  function expandTask(event) {
    const taskItem = event.target.closest(".task-item");
    const taskExpanded = taskItem.querySelector(".task-expanded");
    const taskId = event.target.dataset.taskId;
    const task = state.getTaskById(taskId);
    taskExpanded.appendChild(TaskExpanded(task));
  }

  function closeExpandedTasks() {
    const expandedDivs = document.querySelectorAll(".task-expanded");
    expandedDivs.forEach((div) => (div.innerHTML = ""));
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
      } else {
        projectTitle.value = topProject.title;
        if (topProject.isPseudo) {
          projectTitle.readOnly = true;
        } else {
          projectTitle.readOnly = false;
        }
        for (let task of topProject.tasks) {
          const taskElement = TaskComponent(task);
          if (task.isCompleted) {
            if (!topProject.isPseudo) {
              completedTaskContainer.appendChild(taskElement);
            }
          } else {
            taskContainer.appendChild(taskElement);
          }
        }
      }
    }
    addButtonContainer.innerHTML = "";
    if (!topProject.isPseudo) {
      const addTaskButton = document.createElement("button");
      addTaskButton.classList.add("new-task-btn");
      addTaskButton.dataset.type = "add-task";
      addTaskButton.textContent = "+ Add task";
      addButtonContainer.appendChild(addTaskButton);
    }

    projectsContainer.innerHTML = "";
    for (let project of currentProjects) {
      if (!project.isPseudo) {
        const projectCard = ProjectComponent(project);
        projectsContainer.appendChild(projectCard);
      }
    }
    if (!topProject.isPseudo) {
      //if (true) {
      state.syncStorage();
    }

    /* document.getElementById("testDiv").textContent = JSON.stringify(
      state.getProjects()[0].tasks.map((task) => {
        return { dueDate: task.dueDate, type: typeof task.dueDate };
      })
    )
      .split(",")
      .join("\r\n"); */
  }

  return {
    refresh,
    createNewTask,
    //
  };
})();

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

GUI.refresh();
