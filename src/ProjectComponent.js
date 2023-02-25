export function ProjectComponent(project) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("card");
  projectCard.dataset.id = project.id;
  projectCard.dataset.projectId = project.id;
  projectCard.dataset.type = "project-card";
  const header = document.createElement("h3");
  header.textContent = project.title;
  projectCard.appendChild(header);
  const taskList = document.createElement("ul");
  for (let task of project.tasks) {
    if (!task.isCompleted) {
      const taskLI = document.createElement("li");
      const taskTitle = document.createElement("span");
      taskTitle.textContent = task.title;
      const taskCheckbox = document.createElement("span");
      taskCheckbox.classList.add(`task-isCompleted`, "material-icons-outlined");
      taskCheckbox.textContent = "check_box_outline_blank";
      taskCheckbox.dataset.taskId = task.id;
      taskCheckbox.dataset.projectId = project.id;
      taskCheckbox.dataset.type = "complete-task";
      taskLI.appendChild(taskCheckbox);
      taskLI.appendChild(taskTitle);
      taskList.appendChild(taskLI);
    }
  }
  projectCard.appendChild(taskList);
  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.classList.add("del-project-btn");
  deleteProjectButton.textContent = "Delete project";
  deleteProjectButton.dataset.type = "del-project";
  projectCard.appendChild(deleteProjectButton);
  const elements = projectCard.querySelectorAll("*");
  elements.forEach((element) => (element.dataset.projectId = project.id));
  return projectCard;
}
