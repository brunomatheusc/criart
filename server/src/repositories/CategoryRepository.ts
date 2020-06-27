import { EntityRepository, Repository } from "typeorm";
import Category from './../models/Category';

interface CategoryDTO {
	name: string;
}

@EntityRepository(Category)
export default class CategoryRepository extends Repository<Category> {
	public async createCategory({ name }: CategoryDTO): Promise<Category> {
		const category = this.create({ name });

		await this.save(category);

		return category;
	}

	public async all(): Promise<Category[]> {
		return this.find();
	}
}