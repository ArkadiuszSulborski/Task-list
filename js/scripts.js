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

      const render = () => {
            let htmlString = "";

            for (const task of tasks) {
              htmlString += `
                  <li>
                  ${task.content}
                  </li>
                  `;
            };
            
            document.querySelector(".js-task").innerHTML = htmlString;
      };
    
    const init = () => {
      render();
    };

    init();
}
