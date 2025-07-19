import { Injectable } from '@nestjs/common';
import { db } from './../db/client';
import { usersTable } from 'src/db/schema/user';

@Injectable()
export class UserService {
  async findAll() {
    const users = await db.select().from(usersTable);
    return users;
  }
}
