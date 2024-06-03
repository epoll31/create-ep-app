#!/usr/bin/env node

import { execSync } from "child_process";

execSync(
  `npx create-next-app --example https://github.com/epoll31/create-ep-app/template`,
  { stdio: "inherit" }
);
