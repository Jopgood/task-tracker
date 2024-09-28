import { readTasks, writeTasks } from "./task-helpers";

export function updateTask(taskId: string, description: string) {
  try {
    const tasks = readTasks();
    const id = parseInt(taskId, 10);

    if (isNaN(id)) {
      console.log(`Invalid task ID: ${taskId}`);
      return;
    }

    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      console.log(`Task with ID: ${id} not found`);
      return;
    }

    tasks[taskIndex].description = description;
    tasks[taskIndex].updatedAt = new Date().toISOString();

    // Write the updated tasks back to the file
    writeTasks(tasks);

    console.log(
      `Task with ID ${taskId} updated successfully. The new task is: ${description}`
    );
  } catch (error) {
    console.error(`Error deleting task: ${error}`);
  }
}
