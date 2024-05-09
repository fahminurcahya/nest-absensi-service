import { AbstractEntity } from "@app/common/database/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class UsersEntity extends AbstractEntity<UsersEntity> {

    @Column()
    username: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    timestamp: Date;
}