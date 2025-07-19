import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const _id = parseInt(id, 10);
    return _id;
  }

  @Post()
  create(@Body() input: CreateUserDto) {
    return input;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() input: UpdateUserDto) {
    const _id = parseInt(id, 10);
    console.log(_id);
    return input;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return id;
  }
}
