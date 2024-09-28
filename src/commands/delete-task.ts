import { Command } from "commander";
import { deleteTask } from "../utils/delete-task";

export default function (program: Command) {
  program
    .command("delete")
    .argument("<id>", "Task ID")
    .description("Delete a task")
    .action(deleteTask);
}
