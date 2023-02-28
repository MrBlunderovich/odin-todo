import { TaskComponent, TaskExpanded } from "./TaskComponent";
import { ProjectComponent } from "./ProjectComponent";

export default function refresh(State, event) {
  console.log("GUI.refresh invoked");

  const projectsContainer = document.querySelector(".project-container");
  const projectTitle = document.querySelector(".project-expanded-title");
  const taskContainer = document.querySelector(".task-container");
  const completedTaskContainer = document.querySelector(
    ".completed-task-container"
  );
  const addButtonContainer = document.querySelector(".add-container");

  taskContainer.innerHTML = "";
  completedTaskContainer.innerHTML = "";
  if (!State.topProject) {
    console.warn("GUI.refresh: no projects available");
    projectTitle.value = "Let's start a new project!";
  } else {
    projectTitle.value = State.topProject.title;

    if (State.topProject.isPseudo) {
      projectTitle.readOnly = true;
    } else {
      projectTitle.readOnly = false;
    }

    for (let task of State.topProject.tasks) {
      const taskElement = TaskComponent(task);
      if (task.isCompleted) {
        if (!State.topProject.isPseudo) {
          completedTaskContainer.appendChild(taskElement);
        }
      } else {
        taskContainer.appendChild(taskElement);
      }
      renderExpandedTaskInputs(event, task, taskElement);
    }
  }

  renderAddTaskButton();

  renderSidebarCards(State, projectsContainer);

  if (!State.topProject.isPseudo) {
    State.syncStorage();
  }
  ///////////////////////////////////////////////////

  function renderExpandedTaskInputs(event, task, taskElement) {
    const taskExpanded = taskElement.querySelector(".task-expanded");
    if (task.isExpanded) {
      if (event) {
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
      }
    } else {
      taskExpanded.innerHTML = "";
      taskExpanded.closest(".task-item").classList.remove("expanded");
    }
  }

  function renderSidebarCards() {
    projectsContainer.innerHTML = "";
    for (let project of State.projects) {
      if (!project.isPseudo) {
        const projectCard = ProjectComponent(project);
        projectsContainer.appendChild(projectCard);
      }
    }
  }

  function renderAddTaskButton() {
    addButtonContainer.innerHTML = "";
    if (!State.topProject.isPseudo) {
      const addTaskButton = document.createElement("button");
      addTaskButton.classList.add("new-task-btn");
      addTaskButton.dataset.type = "add-task";
      addTaskButton.textContent = "+ Add task";
      addButtonContainer.appendChild(addTaskButton);
    }
  }
}
