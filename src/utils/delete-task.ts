import { readTasks, writeTasks } from "./task-helpers";

export function deleteTask(taskId: string) {
    try {
        const tasks = readTasks();
        const id = parseInt(taskId, 10);
        
        if (isNaN(id)) {
            console.log(`Invalid task ID: ${taskId}`);
            return;
        }

        const taskIndex = tasks.findIndex(task => task.id === id);

        if (taskIndex === -1) {
            console.log(`Task with ID: ${id} not found`);
            return;
        }

        tasks.splice(taskIndex, 1);
        writeTasks(tasks);

        console.log(`Task with ID: ${id} successfully removed`);
    } catch (error) {
        console.error(`Error deleting task: ${error}`);
    }
}