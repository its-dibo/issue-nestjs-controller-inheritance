import { BasicEntity } from "src/shared/dto/basic.entity";
import {  Entity } from "typeorm";

@Entity("users")
export class UserEntity extends BasicEntity {}
