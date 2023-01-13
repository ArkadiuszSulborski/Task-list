{
      const grettings = () => {
            console.log("Hello Youcode");
      };

      const tasks = [
      ];

      const addNewTask = (newTaskContent) => {
            tasks.push({
                  content: newTaskContent
            });

            render();
      };

      const removeTask = (index) => {
            tasks.splice(index, 1)
            render();
      }

      const taskDone = (index) => {
            tasks[index].done = !tasks[index].done;
            render();
      };

      const bindEvents = () => {
            const deleteButtons = document.querySelectorAll(".js-delete");

            deleteButtons.forEach((deleteButton, index) => {
                  deleteButton.addEventListener("click", () => {
                        removeTask(index);
                  });
            });

            const doneButtons = document.querySelectorAll(".js-done");

            doneButtons.forEach((doneButton, index) => {
                  doneButton.addEventListener("click", () => {
                        taskDone(index);
                  });
            });
      };
      const render = () => {
            let htmlString = "";

            for (const task of tasks) {
                  htmlString += `
                  <li class="list">
                        <button class="list__button list__button--done js-done">
                        ${task.done ? "✔" : ""}
                        </button>
                        <span class="list__taskName${task.done ? " list__taskName--done" : ""}">
                        ${task.content}
                        </span>
                        <button class="list__button js-delete">🗑</button>
                  </li>
                  `;
            };

            document.querySelector(".js-task").innerHTML = htmlString;

            bindEvents();
      };



      const onFormSubmit = (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();

            if (newTaskContent === "") {
                  return;
            };
            addNewTask(newTaskContent);

            document.querySelector(".js-newTask").value = "";
      };

      const init = () => {
            render();
            grettings();

            const form = document.querySelector(".js-form");

            form.addEventListener("submit", onFormSubmit);

      };

      init();
};
