import { connection } from "./connection";

connection.sync(); // Synchronizes the database schema with the models defined in the codebase.

export { connection };