import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../config';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg'

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [config.KEY],
            useFactory: (configType: ConfigType<typeof config>) => {
                const { user, host, database, password, port } = configType.postgres;
                return {
                    type: 'postgres',
                    host,
                    port,
                    username: user,
                    password,
                    database: database,
                    autoLoadEntities: true,
                    synchronize: true
                };
            },
        }),
    ],
    providers: [
        {
            provide: 'PG',
            useFactory: (configType: ConfigType<typeof config>) => {
                const { user, host, database, password, port } = configType.postgres;
                const client = new Client({
                    user,
                    host,
                    database,
                    password,
                    port,
                });
                client.connect();
                return client;
            },
            inject: [config.KEY],
        }
    ],
    exports: [
        TypeOrmModule
    ]
})

export class DatabaseModule { }
