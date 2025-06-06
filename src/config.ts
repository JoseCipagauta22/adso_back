/* eslint-disable prettier/prettier */
import { registerAs } from "@nestjs/config";

export default registerAs('config', () => {
    return {
        postgres: {
            user: process.env.POSTGRES_USER,
            host: process.env.POSTGRES_HOST,
            database: process.env.POSTGRES_DB,
            password: process.env.POSTGRES_PASSWORD,
            port: parseInt(process.env.POSTGRES_PORT!, 10),
        },
        mysql: {
            user: process.env.MYSQL_USER,
            host: process.env.MYSQL_HOST,
            database: process.env.MYSQL_DATABASE,
            password: process.env.MYSQL_ROOT_PASSWORD,
            port: parseInt(process.env.MYSQL_PORT!, 10),
        }
    }
});