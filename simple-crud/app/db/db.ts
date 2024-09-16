import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const turso = createClient({
  url: process.env.DB_URL!,
  authToken: process.env.DB_TOKEN,
});

export const db = drizzle(turso);
