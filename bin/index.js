#!/usr/bin/env node

import { execSync } from "child_process";

execSync(
  `npx create-next-app --example https://github.com/epoll31/create-esp-app/tree/main/example`,
  { stdio: "inherit" }
);
