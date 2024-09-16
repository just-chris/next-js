// require("dotenv").config();

// import type { Config } from "drizzle-kit";

// export default {
//   schema: "./app/db/db.ts",
//   out: "./migrations",
//   dialect: "sqlite",
//   driver: "turso",
//   dbCredentials: {

//   },
// } satisfies Config;

import { defineConfig } from "drizzle-kit"
export default defineConfig({
    schema: "./app/db/schema.ts",
    dialect: "sqlite", // "postgresql" | "mysql"
    driver: "turso", // optional and used only if `aws-data-api`, `turso`, `d1-http`(WIP) or `expo` are used
    dbCredentials: {
      url: process.env.DB_URL!,
      authToken: process.env.DB_TOKEN,
    }
})