const tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
let isRunning = true;
let taskIndex;

while (isRunning) {
  console.log(`Task Manager Menu:
    1. Add Task
    2. View Tasks
    3. Toggle Task Completion
    4. Edit Task
    5. Delete Task
    6. Search For Tasks By Name
    7. Exit`);
  let menuInput = Number(prompt("Enter Your Choice (1-7)"));

  switch (menuInput) {
    case 1:
      let newTask = prompt("Enter The Task");
      tasks.push({ task: newTask, completed: false });
      localStorage.setItem("Tasks", JSON.stringify(tasks));
      console.log("Task Added");
      break;

    case 2:
      if (tasks.length == 0) {
        console.log("No Tasks Available");
      } else {
        tasks.forEach((task, index) => {
          console.log(
            `${index + 1}. ${task.task} | ${
              task.completed ? "Completed" : "Incomplete"
            }`
          );
        });
      }
      break;

    case 3:
      taskIndex =
        Number(prompt("Enter the task number to toggle completion")) - 1;
      if (tasks[taskIndex]) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        localStorage.setItem("Tasks", JSON.stringify(tasks));
        console.log("Task completion toggled!");
      } else {
        console.log("Invalid task Number");
      }
      break;

    case 4:
      taskIndex = Number(prompt("Enter the task number to edit")) - 1;
      if (tasks[taskIndex]) {
        tasks[taskIndex].task = prompt("Enter the new task");
        localStorage.setItem("Tasks", JSON.stringify(tasks));
        console.log("Task edited");
      } else {
        console.log("Invalid task Number");
      }
      break;

    case 5:
      taskIndex = Number(prompt("Enter the task number to delete")) - 1;
      if (tasks[taskIndex]) {
        tasks.splice(taskIndex, 1);
        console.log("Task deleted");
        console.log("Task deleted");
      } else {
        console.log("Invalid task Number");
      }
      break;

    case 6:
      let search = prompt("Enter the task name to search for:").toLowerCase();
      let foundTasks = tasks.filter((task) =>
        task.task.toLowerCase().includes(search)
      );

      if (foundTasks.length > 0) {
        foundTasks.forEach((task, index) => {
          console.log(
            `${index + 1}. ${task.task} | ${
              task.completed ? "Completed" : "Incomplete"
            }`
          );
        });
      } else {
        console.log("No tasks found with that name.");
      }
      break;

    case 7:
      isRunning = false;
      console.log("Exiting Task Manager.");
      break;

    default:
      console.log("Invalid choice, please enter a number between 1 and 7.");
      break;
  }
}
