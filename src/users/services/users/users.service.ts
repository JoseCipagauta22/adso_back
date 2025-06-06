import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/tasks/entities/task.entity';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/user.dto';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    users: User[] = [];

    constructor(@InjectRepository(User) private userRepo: Repository<User>){}
    
    async findAll(){
        this.users = await this.userRepo.find();
        return this.users;
    }
    
    create( data: CreateUserDto ){
        const newUser = this.userRepo.create(data);
        return this.userRepo.save(newUser);
    }

    async update(id:number, changes: UpdateUserDto){
        const user = await this.userRepo.findOne({where: {id}});
        this.userRepo.merge(user!, changes);
        return this.userRepo.save(user!);
    }

    async delete(id:number){
        await this.userRepo.delete(id);
        return this.findAll();
    }

    
}
