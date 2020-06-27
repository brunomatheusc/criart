import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('products')
export default class Product {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	price: Number;

	@Column()
	weight: Number;

	@Column()
	typeId: string;

	@Column()
	categoryId: string;

	@Column()
	mainImage: string;

	@Column('varchar', { array: true })
	imageUrls: string[];

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}