import { readTasks, writeTasks } from "./task-helpers";
import { Task } from "@/types/tasks";

export function addTask(description: string) {
  const tasks = readTasks();

  const newTask: Task = {
    id: tasks.length + 1,
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  writeTasks(tasks);

  console.log(`Task added successfully (ID: ${newTask.id})`);
}
