import { readTasks } from "./task-helpers";
import { Task } from "@/types/tasks";

export function listTasks(status?: string) {
  try {
    const tasks = readTasks();

    if (tasks.length === 0) {
      console.log(
        "No tasks found. Start by creating a new task with task-cli add <description>"
      );
      return;
    }

    let filteredTasks: Task[];
    if (status) {
      const validStatuses = ["todo", "in-progress", "done"];
      if (!validStatuses.includes(status)) {
        console.log(
          `Invalid status: ${status}. Valid statuses are: todo, in-progress, done`
        );
        return;
      }
      filteredTasks = tasks.filter((task) => task.status === status);
    } else {
      filteredTasks = tasks;
    }

    if (filteredTasks.length === 0) {
      console.log(`No tasks found with status: ${status}`);
      return;
    }

    console.log(status ? `Tasks with status '${status}':` : "All tasks:");

    // Prepare data for table output
    const tableData = filteredTasks.map((task) => ({
      ID: task.id,
      Status: task.status,
      Description: task.description,
      "Created At": new Date(task.createdAt).toLocaleString(),
      "Updated At": task.updatedAt
        ? new Date(task.updatedAt).toLocaleString()
        : "N/A",
    }));

    // Print the table
    console.table(tableData);
  } catch (error) {
    console.error(`Error listing tasks: ${error}`);
  }
}
