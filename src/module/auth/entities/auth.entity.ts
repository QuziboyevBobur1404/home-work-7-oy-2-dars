
// import { Article } from "src/article/model/article.entity";

import { BaseEntity } from "src/database/entity/base.entity";
import { roleUser } from "src/shared/enums/roles.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "auth"})
export class Auth extends BaseEntity {

@Column()
username!: string;

@Column()
email!: string

@Column()
password!: string

@Column({type: "enum", enum: roleUser, default: roleUser.USER})
role!: roleUser;

@Column( {nullable: true})
otp?: string

@Column({type: "bigint", nullable: true})
otpTime?: number 





}
