import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './conrollers/tasks/tasks.controller';
import { TasksService } from './services/tasks/tasks.service';
import { Task } from './entities/task.entity';
import { register } from 'module';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {
  // static register(connectionNames: string[]): DynamicModule {
  //   const typeOrmImports = connectionNames.map(name =>
  //     TypeOrmModule.forFeature([Task], name),
  //   );

  //   return {
  //     module: TasksModule,
  //     imports: typeOrmImports,
  //     providers: [TasksService],
  //     controllers: [TasksController],
  //   };
  // }
}
