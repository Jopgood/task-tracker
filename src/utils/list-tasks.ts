import fs from "fs";
import path from "path";
import { Task } from "../types/tasks";

const tasksFile = path.join(__dirname, "../../tasks.json");

export function listTasks() {
  if (!fs.existsSync(tasksFile)) {
    console.log("No tasks found.");
    return;
  }

  const data = fs.readFileSync(tasksFile, "utf8");
  const tasks: Task[] = JSON.parse(data);

  console.log("Tasks:");
  tasks.forEach((task) => {
    console.log(`${task.id}. [${task.status}] ${task.description}`);
  });
}
