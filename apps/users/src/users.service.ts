import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository
  ) { }

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create({
      ...createUserDto,
      timestamp: new Date(),
      id: 123
    });
  }

  findAll() {
    return this.usersRepository.find({})
  }

  findOne(_id: number) {
    return this.usersRepository.findOne({})
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    // return this.usersRepository.findOneAndUpdate({ id });
  }

  remove(id: number) {
    // return this.usersRepository.findOneAndDelete(id);
  }
}
