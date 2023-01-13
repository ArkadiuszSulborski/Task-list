{
      const tasks = [
            {
                  content:"abc",
                  done: false,
            },
            {
                  content:"cba",
                  done: true,
            },
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

      const render = () => {
            let htmlString = "";

            for (const task of tasks) {
              htmlString += `
                  <li
                  ${task.done ? " style=\"text-decoration: line-through\"" : ""}
                  >
                  <button class="js-delete">Usuń</button>
                  ${task.content}
                  </li>
                  `;
            };
            
            document.querySelector(".js-task").innerHTML = htmlString;

            const deleteButtons = document.querySelectorAll(".js-delete");

            deleteButtons.forEach((deleteButton, index) => {
                  deleteButton.addEventListener("click", () => {
                       removeTask(index);
                  });
            })
      };

      

      const onFormSubmit = (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();
           
            if(newTaskContent === "") {
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
