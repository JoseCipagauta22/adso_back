import { Controller, Get } from '@nestjs/common';
import { TasksService } from 'src/tasks/services/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Get()
    getCategories() {
        console.log('tasks');
        return this.tasksService.findAll();
    }
}
