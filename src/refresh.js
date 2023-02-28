export default function refresh(state, event) {
  console.log("GUI.refresh invoked");

  const projectsContainer = document.querySelector(".project-container");
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
  }
}
