import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dtos/user.dto';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepo: Repository<User>){}
    create( data: CreateUserDto ){
        const newUser = this.userRepo.create(data);
        return this.userRepo.save(newUser);
    }
}
