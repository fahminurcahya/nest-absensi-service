import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { UsersEntity } from "./models/users.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager, Repository } from "typeorm";

@Injectable()
export class UsersRepository extends AbstractRepository<UsersEntity> {
    protected readonly logger = new Logger(UsersRepository.name);
    constructor(
        @InjectRepository(UsersEntity)
        userRepository: Repository<UsersEntity>,
        entityManeger: EntityManager,
    ) {
        super(userRepository, entityManeger)
    }

}