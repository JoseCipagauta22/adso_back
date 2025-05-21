import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/user.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post()
    createCategory(@Body() payload: CreateUserDto) {
        return this.usersService.create(payload);
    }
}
