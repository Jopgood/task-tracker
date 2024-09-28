import fs from "fs";
import path from "path";
import { Task } from "@/types/tasks";

const tasksFile = path.join(__dirname, "../../tasks.json")

export function readTasks(): Task[] {
    try {
        const data = fs.readFileSync(tasksFile, "utf8");
        return JSON.parse(data);
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
            return [];
        }
        throw new Error(`Failed to read tasks: ${error}`);
    }
}

export function writeTasks(tasks: Task[]): void {
    try {
        fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
    } catch (error) {
        throw new Error(`Failed to write tasks: ${error}`);
    }
}