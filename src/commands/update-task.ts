import { Command } from "commander";
import { updateTask } from "../utils/update-task";

export default function (program: Command) {
  program
    .command("update")
    .argument("<id>")
    .argument("<description>")
    .description("Update a task")
    .action(updateTask);
}
