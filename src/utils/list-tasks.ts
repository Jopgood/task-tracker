import { readTasks } from "./task-helpers";

export function listTasks() {
  try {
    const tasks = readTasks();

    if (tasks.length === 0) {
      console.log(
        "No tasks found. Start by creating a new task with task-cli add <description>"
      );
      return;
    }

    console.log("Tasks:");
    tasks.forEach((task) => {
      console.log(`${task.id}. [${task.status}] ${task.description}`);
    });
  } catch (error) {
    console.error(`Error listing tasks: ${error}`);
  }
}
