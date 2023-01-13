{
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
                  <li
                  ${task.done ? " style=\"text-decoration: line-through\"" : ""}
                  >
                  <button class="js-delete">Usuń</button>
                  ${task.content}
                  <button class="js-done">Zrobione</button>
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
      };

      const init = () => {
            render();

            const form = document.querySelector(".js-form");

            form.addEventListener("submit", onFormSubmit);

      };

      init();
};
