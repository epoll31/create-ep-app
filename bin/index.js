#!/usr/bin/env node

import { execSync } from "child_process";

// Get the project name from the command line arguments
const projectName = process.argv[2];

// Check if the project name starts with a hyphen
if (projectName && projectName.startsWith("-")) {
  console.error("Project name cannot start with a hyphen.");
  process.exit(1);
}

// Construct the command with or without the project name
const command = projectName
  ? `npx create-next-app ${projectName} --example https://github.com/epoll31/create-esp-app/tree/main/example`
  : `npx create-next-app --example https://github.com/epoll31/create-esp-app/tree/main/example`;

try {
  // Execute the command
  execSync(command, { stdio: "inherit" });
} catch (error) {
  console.error("Failed to create the project:", error.message);
  process.exit(1);
}
