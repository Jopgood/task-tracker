#!/usr/bin/env node

import { Command } from "commander";
import * as commands from "./commands";

const program = new Command();

program
  .name("task-tracker")
  .description("CLI to track your tasks")
  .version("1.0.0");

// Register all commands
Object.values(commands).forEach((command) => command(program));

program.parse(process.argv);
