import { Command } from "commander";
import { markInProgress, markDone } from "../utils/update-task-status";

export function markInProgressCmd (program: Command) {
  program
    .command("mark-in-progress")
    .argument("<id>")
    .description("Mark a task as in progress")
    .action(markInProgress);
}

export function markDoneCmd (program: Command) {
    program
      .command("mark-done")
      .argument("<id>")
      .description("Mark a task as done")
      .action(markDone);
  }
