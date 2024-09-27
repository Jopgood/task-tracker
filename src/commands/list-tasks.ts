import { Command } from "commander";
import { listTasks } from "../utils/list-tasks";

export default function (program: Command) {
  program.command("list").description("List all tasks").action(listTasks);
}
