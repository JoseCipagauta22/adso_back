import { Task } from "src/tasks/entities/task.entity";
import { User } from "src/users/entities/user.entity";
import { DataSource } from "typeorm";
import { InitMigration1749156398866 } from "./migrations/1749156398866-InitMigration";
import { RemoveTextoColum1749161844950 } from "./migrations/1749161844950-RemoveTextoColum";
import { RemoveTextoColum1749239092838 } from "./migrations/1749239092838-RemoveTextoColum";
import { AddTextoColum1749239573100 } from "./migrations/1749239573100-AddTextoColum";
import { AddTextoColum1749248872106 } from "./migrations/1749248872106-AddTextoColum";
import { AddTextoColum1749250065332 } from "./migrations/1749250065332-AddTextoColum";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "123456",
    database: "adso_db",
    synchronize: false,
    logging: true,
    entities: [User, Task],
    migrations: [AddTextoColum1749250065332],
    subscribers: [],
})