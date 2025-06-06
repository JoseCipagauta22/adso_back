import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/user.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get()
    getCategories() {
        return this.usersService.findAll();
    }

    @Post()
    createCategory(@Body() payload: CreateUserDto) {
        return this.usersService.create(payload);
    }

    @Put(':userId')
    udpdateCategory(@Param('userId', ParseIntPipe) userId: number, @Body() payload: UpdateUserDto){
        return this.usersService.update(userId, payload);
    }

    @Delete(':userId')
    deleteCategory(@Param('userId', ParseIntPipe) userId: number){
        return this.usersService.delete(userId);
    }
}
