import { readTasks, writeTasks } from "./task-helpers";

export function markInProgress(taskId: string) {
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

        tasks[taskIndex].status = 'in-progress';
        tasks[taskIndex].updatedAt = new Date().toISOString();

        // Write the updated tasks back to the file
        writeTasks(tasks);

        console.log(
            `Task status with ID ${taskId} updated successfully. The new status is: in-progress`
        );
    } catch (error) {
        console.error(`Error updating task: ${error}`);
    }
}

export function markDone(taskId: string) {
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

        tasks[taskIndex].status = 'done';
        tasks[taskIndex].updatedAt = new Date().toISOString();

        // Write the updated tasks back to the file
        writeTasks(tasks);

        console.log(
            `Task status with ID ${taskId} updated successfully. The new status is: done`
        );
    } catch (error) {
        console.error(`Error updating task: ${error}`);
    }
}
