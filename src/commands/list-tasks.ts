import { Command } from "commander";
import { listTasks } from "../utils/list-tasks";

export function listAll(program: Command) {
  program
    .command("list")
    .argument("[status]", "Filter tasks by status: todo, in-progress, or done")
    .description("List all tasks or filter by status")
    .action(listTasks);
}
