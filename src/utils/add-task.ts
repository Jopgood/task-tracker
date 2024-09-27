import fs from "fs";
import path from "path";
import { Task } from "../types/tasks";

const tasksFile = path.join(__dirname, "../../tasks.json");

export function addTask(description: string) {
  let tasks: Task[] = [];

  if (fs.existsSync(tasksFile)) {
    const data = fs.readFileSync(tasksFile, "utf8");
    tasks = JSON.parse(data);
  }

  const newTask: Task = {
    id: tasks.length + 1,
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));

  console.log(`Task added successfully (ID: ${newTask.id})`);
}
