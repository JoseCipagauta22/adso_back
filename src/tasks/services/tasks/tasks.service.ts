import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto, UpdateTaskDto } from 'src/tasks/dtos/task.dto';
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

    async findOne(id: number) {
        const category = await this.taskRepo.findOne({where: { id: 1 }});
        if (!category) {
          throw new NotFoundException(`Product #${id} not found`);
        }
        return category;
    }

    create( data: CreateTaskDto ){
        const newTask = this.taskRepo.create(data);
        return this.taskRepo.save(newTask);
    }

    async update(id:number, changes: UpdateTaskDto){
        const task = await this.taskRepo.findOne({where: {id}});
        this.taskRepo.merge(task!, changes);
        return this.taskRepo.save(task!);
    }

    delete(id:number){
        return this.taskRepo.delete(id);
    }


}
