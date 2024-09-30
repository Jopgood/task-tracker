import { readTasks, writeTasks } from "./task-helpers";
import { Task } from "@/types/tasks";

export function addTask(description: string) {
  const tasks = readTasks();

  const maxId = Math.max(...tasks.map(task => task.id))

  const newTask: Task = {
    id: maxId + 1,
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  writeTasks(tasks);

  console.log(`Task added successfully (ID: ${newTask.id})`);
}
