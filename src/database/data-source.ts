import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "10.200.217.35",
  port: 5432,
  username: "postgres",
  password: "2003",
  database: "testdb",
  synchronize: false,
  logging: ["query"],
  entities: [__dirname + "/entity/**/*{.ts, .js}"],
  migrations: [__dirname + "/migrations/**/*{.ts, .js}"],
  subscribers: [],
});

export default AppDataSource;

