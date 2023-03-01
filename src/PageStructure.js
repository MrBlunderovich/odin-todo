const createPageStructure = (function () {
  document.body.innerHTML = `
<header class="header">
      Projectile.
      <div class="avatar"></div>
    </header>
    <div class="page-container">
      <nav class="sidebar">
        <button data-type="new-project" class="card new-project">
          + Add project
        </button>
        <button data-type="overdue-project" class="card pseudo-project overdue">
          Show overdue tasks
        </button>
        <button data-type="today-project" class="card pseudo-project today">
          Show today tasks
        </button>
        <div id="project-container" class="project-container"></div>
      </nav>
      <main class="main">
        <div class="project-expanded">
          <input
            id="project-expanded-title"
            class="project-expanded-title"
            value="Initial heading"
            autocomplete="off"
          />
          <ul class="task-container"></ul>
          <div class="add-container"></div>
          <ul class="completed-task-container"></ul>
        </div>
      </main>
    </div>
`;
})();
export default createPageStructure;
