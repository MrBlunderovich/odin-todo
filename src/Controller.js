import Render from "./Refresh";
import State from "./State";
import { isPast, isToday, endOfDay } from "date-fns";
import { capitalize } from "./Capitalize";

const Controller = (function () {
  //////////////////////////////////////////////+++++++++++++++++++CHANGE
  document.addEventListener("change", handleDocumentChange);
  function handleDocumentChange(event) {
    if (event.target.id === "project-expanded-title") {
      changeProjectTitle(event);
      event.target.blur();
    } else if (event.target.closest(".task-expanded")) {
      saveTaskData(event);
    }
  }
  ///////////////////////////////////////////////++++++++++++++++++++KEY
  document.addEventListener("keyup", handleDocumentKeyUp);
  function handleDocumentKeyUp(event) {
    if (
      (event.keyCode === 13 && //enter
        event.ctrlKey &&
        event.target.dataset.isTaskInput) ||
      event.keyCode === 27 //esc
    ) {
      closeExpandedTasks();
      refresh();
    }
  }

  ///////////////////////////////////////////////++++++++++++++++++++CLICK
  document.addEventListener("click", handleDocumentClick);
  function handleDocumentClick(event) {
    //avoid checking unnecessary conditions
    if (
      document.querySelector(".task-item.expanded") &&
      !event.target.closest(".task-item")
    ) {
      closeExpandedTasks();
      //refresh();
    }

    if (event.target.dataset.type === "complete-task") {
      completeTask(event);
    } else if (event.target.closest(".main")) {
      if (event.target.dataset.type === "add-task") {
        createNewTask();
      } else if (event.target.dataset.expander) {
        expandTask(event);
      } else if (event.target.dataset.type === "delete-task") {
        deleteTask(event);
      }
    } else if (event.target.closest(".sidebar")) {
      if (
        event.target.closest(".project-container") &&
        event.target.id !== "project-container" &&
        event.target.dataset.type !== "complete-task"
      ) {
        selectProject(event);
      } else if (event.target.dataset.type === "overdue-project") {
        overduePseudoProject();
      } else if (event.target.dataset.type === "today-project") {
        todayPseudoProject();
      } else if (event.target.dataset.type === "new-project") {
        createNewProject();
      } else if (event.target.dataset.type === "del-project") {
        deleteProject(event);
      }
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
    State.projects.forEach((project) => {
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
    State.projects.forEach((project) => {
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
      const taskId = event.target.dataset.taskId;
      State.removeTask(taskId);
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
    Render(State, event);
  }
})();
export default Controller;
