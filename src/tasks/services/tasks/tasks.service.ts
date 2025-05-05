import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/tasks/entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {

    tasks: Task[] = [];

    constructor(@InjectRepository(Task) private taskRepo: Repository<Task>){}

    async findAll(){
        this.tasks = await this.taskRepo.find();
        return this.tasks;
    }
}
