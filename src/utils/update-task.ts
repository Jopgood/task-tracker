import fs from "fs";
import path from "path";
import { Task } from "../types/tasks";

const tasksFile = path.join(__dirname, "../../tasks.json");

export function updateTask(taskId: number, description: string) {
  let tasks: Task[] = [];

  if (fs.existsSync(tasksFile)) {
    const data = fs.readFileSync(tasksFile, "utf8");
    tasks = JSON.parse(data);
  } else {
    console.log(
      "No tasks found. Please start a new todo list with `task-cli add <description>`"
    );
    return;
  }

  // Find index of specific object using findIndex method.
  const taskIndex = tasks.findIndex((task) => task.id === Number(taskId));

  if (taskIndex === -1) {
    console.log(`Task with ID ${taskId} not found.`);
    return;
  }

  tasks[taskIndex].description = description;
  tasks[taskIndex].updatedAt = new Date().toISOString();

  // Write the updated tasks back to the file
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));

  console.log(
    `Task with ID ${taskId} updated successfully. The new task is: ${description}`
  );
}
