import Render from "./refresh";
import State from "./state";
import { isPast, isToday, endOfDay } from "date-fns";
import { capitalize } from "./capitalize";

const Controller = (function () {
  //let State.topProject = undefined;
  //const State = {}

  //////////////////////////////////////////////+++++++++++++++++++CHANGE
  document.addEventListener("change", handleDocumentChange);
  function handleDocumentChange(event) {
    if (event.target.id === "project-expanded-title") {
      changeProjectTitle(event);
    } else if (event.target.closest(".task-expanded")) {
      saveTaskData(event);
    }
  }
  ///////////////////////////////////////////////++++++++++++++++++++KEY
  document.addEventListener("keyup", handleDocumentKeyUp);
  function handleDocumentKeyUp(event) {
    if (
      event.keyCode === 13 && //enter
      event.ctrlKey &&
      event.target.dataset.isTaskInput
    ) {
      //saveTaskData(event);
      closeExpandedTasks();
      refresh();
    } else if (
      event.keyCode === 27 //&& //escape
      //event.target.dataset.isTaskInput
    ) {
      closeExpandedTasks();
      refresh();
    }
  }

  ///////////////////////////////////////////////++++++++++++++++++++CLICK
  document.addEventListener("click", handleDocumentClick);
  function handleDocumentClick(event) {
    //avoid checking unnecessary conditions
    if (event.target.dataset.expander) {
      expandTask(event);
    }
    if (event.target.dataset.type === "delete-task") {
      deleteTask(event);
    }
    if (event.target.dataset.type === "complete-task") {
      completeTask(event);
    }
    if (event.target.dataset.type === "add-task") {
      createNewTask();
    }
    if (event.target.dataset.type === "del-project") {
      deleteProject(event);
    }
    if (
      event.target.closest(".project-container") &&
      event.target.id !== "project-container" &&
      event.target.dataset.type !== "complete-task"
    ) {
      selectProject(event);
    }
    if (event.target.dataset.type === "new-project") {
      createNewProject();
    }
    if (event.target.dataset.type === "overdue-project") {
      overduePseudoProject();
    }
    if (event.target.dataset.type === "today-project") {
      todayPseudoProject();
    }
  }
  /////////////////////////////////****************************FUNCTIONS

  function changeProjectTitle(event) {
    console.log("changing project title");
    if (State.topProject) {
      State.topProject.title = capitalize(event.target.value);
      refresh();
    } else {
      console.warn("no project to change title of");
    }
  }

  function overduePseudoProject() {
    console.log("GUI.overduePseudoProject invoked");
    State.clearPseudoProjects();
    const overdueTasks = [];
    State.getProjects().forEach((project) => {
      project.tasks.forEach((task) => {
        if (isPast(endOfDay(task.dueDate))) {
          overdueTasks.push(task);
        }
      });
    });
    State.createProject("Overdue tasks", overdueTasks, true);
    refresh();
  }

  function todayPseudoProject() {
    console.log("GUI.todayPseudoProject invoked");
    State.clearPseudoProjects();
    const todayTasks = [];
    State.getProjects().forEach((project) => {
      project.tasks.forEach((task) => {
        if (isToday(task.dueDate)) {
          todayTasks.push(task);
        }
      });
    });
    State.createProject("Tasks for today", todayTasks, true);
    refresh();
  }

  function createNewProject() {
    console.log("GUI.createNewProject invoked");
    State.createProject("New project");
    refresh();
    createNewTask();
  }

  function selectProject(event) {
    console.log("GUI.selectProject invoked");
    const projectId = event.target.dataset.projectId;
    State.selectProject(projectId);
    State.clearPseudoProjects();
    refresh(event);
  }

  function deleteProject(event) {
    const projectId = event.target.dataset.projectId;
    const targetProject = State.getProjectById(projectId);
    if (
      event.ctrlKey ||
      confirm(`Please confirm removing "${targetProject.title}" project`)
    ) {
      State.removeProject(projectId);
      refresh(event);
    }
  }

  function createNewTask() {
    console.log("GUI.createNewTask invoked");
    if (!State.topProject) {
      console.log("no projects yet");
      createNewProject();
    }
    //topProject.newTask();
    const newTask = State.topProject.newTask();
    const newTaskId = newTask.id;
    refresh();
    document
      .querySelector(`.task-item[data-task-id='${newTaskId}']>.task-title`)
      .click();
  }

  function deleteTask(event) {
    console.log("GUI deleting task");
    if (event.ctrlKey || confirm("Please confirm deleting task")) {
      State.topProject.removeTask(event.target.dataset.taskId);
      refresh();
    }
  }

  function completeTask(event) {
    console.log("GUI completing task");
    const taskId = event.target.dataset.taskId;
    const targetTask = State.getTaskById(taskId);
    targetTask.isCompleted = !targetTask.isCompleted;
    refresh();
  }

  function saveTaskData(event) {
    console.log("GUI saving task data");
    const taskId = event.target.dataset.taskId;
    const targetTask = State.getTaskById(taskId);
    const inputs = event.target
      .closest(".task-expanded")
      .querySelectorAll("input,select,textarea");
    inputs.forEach((field) => {
      const fieldType = field.dataset.type;
      if (fieldType === "title") {
        targetTask[fieldType] = capitalize(field.value);
      } else if (fieldType === "dueDate") {
        targetTask[fieldType] = field.valueAsDate;
      } else {
        targetTask[fieldType] = field.value;
      }
    });
    refresh(event);
  }

  function expandTask(event) {
    //if called not from inside of already expanded task:
    closeExpandedTasks();
    const taskId = event.target.dataset.taskId;
    const task = State.getTaskById(taskId);
    task.isExpanded = true;

    refresh(event);
  }

  function closeExpandedTasks() {
    State.topProject.tasks.forEach((task) => (task.isExpanded = false));
  }

  //////////////////////////////////-----------------REFRESH
  function refresh(event) {
    console.log("GUI.refresh invoked");

    Render(State, event);
    /* const projectsContainer = document.querySelector(".project-container");
      const projectTitle = document.querySelector(".project-expanded-title");
      const taskContainer = document.querySelector(".task-container");
      const completedTaskContainer = document.querySelector(
        ".completed-task-container"
      );
      const addButtonContainer = document.querySelector(".add-container");
  
      const currentProjects = state.getProjects();
      topProject = currentProjects[0];
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
  
          const taskExpanded = taskElement.querySelector(".task-expanded");
          if (task.isExpanded) {
            console.log("expansive!");
            taskExpanded.appendChild(TaskExpanded(task));
            taskExpanded.closest(".task-item").classList.add("expanded");
            const targetType = event.target.dataset.type;
            let targetField = "";
            switch (targetType) {
              case "note":
                targetField = ".description-textarea";
                break;
              case "date":
                targetField = ".date-input";
                break;
              case "priority":
                targetField = ".priority-input";
                break;
              default:
                targetField = ".title-input";
                break;
            }
            taskExpanded.querySelector(targetField).focus();
          } else {
            taskExpanded.innerHTML = "";
            taskExpanded.closest(".task-item").classList.remove("expanded");
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
        state.syncStorage();
      } */
  }

  return {
    //refresh,
    //createNewTask,
    //
  };
})();
export default Controller;
