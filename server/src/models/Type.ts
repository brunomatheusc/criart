import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

enum TypeEnum {
	KIT,
	SINGLE,
	COMBO
}

@Entity('categories')
export default class Type {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	type: TypeEnum;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}