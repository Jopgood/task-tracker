import { Command } from "commander";
import { addTask } from "../utils/add-task";

export default function (program: Command) {
  program
    .command("add")
    .description("Add a new task")
    .argument("<description>", "Task description")
    .action(addTask);
}
