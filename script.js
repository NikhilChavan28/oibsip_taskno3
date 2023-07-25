// const inputItem = document.querySelector('#newtask');
// // const todoL = document.querySelector('#todolist');

// inputItem.addEventListener("keyup", function(event) {
//     if (event.key == "Enter") {
//         addtodo(this.value);
//         this.value = "";
//     }

// })


document.querySelector('#push').onclick = function() {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please enter the task ")
    } else {
        document.querySelector('#task').innerHTML +=

            ` <div class = "task" >    
                    <span id="taskname">
            ${document.querySelector('#newtask input').value} 
                  </span>  
            <button class = "delete"> Clean </button >
            </div>   
            `;
    }

    var current_task = document.querySelectorAll(".delete");
    for (let i = 0; i < current_task.length; i++) {
        current_task[i].onclick = function() {
            this.parentNode.remove();
        }

    }
    var tasks = document.querySelectorAll(".task");
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function() {
            this.classList.toggle('completed');
        }

    }

    document.querySelector("#newtask input").
    value = "";

}