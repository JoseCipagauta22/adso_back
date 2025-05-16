import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from 'src/tasks/dtos/task.dto';
import { TasksService } from 'src/tasks/services/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Get()
    getCategories() {
        return this.tasksService.findAll();
    }

    @Get(':taskId')
    getOne(@Param('taskId', ParseIntPipe) taskId: number) {
        return this.tasksService.findOne(taskId);
    }

    @Post()
    createCategory(@Body() payload: CreateTaskDto) {
        return this.tasksService.create(payload);
    }

    @Put(':taskId')
    udpdateCategory(@Param('taskId', ParseIntPipe) taskId: number, @Body() payload: UpdateTaskDto){
        return this.tasksService.update(taskId, payload);
    }

    @Delete(':taskId')
    deleteCategory(@Param('taskId', ParseIntPipe) taskId: number){
        return this.tasksService.delete(taskId);
    }
}
