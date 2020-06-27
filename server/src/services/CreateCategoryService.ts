import Category from './../models/Category';
import CategoryRepository from './../repositories/CategoryRepository';
import { getCustomRepository } from 'typeorm';

interface CategoryDTO {
	name: string;
}

export default class CreateCategoryService {
	public async execute({ name }: CategoryDTO): Promise<Category> {
		const categoryRepository = getCustomRepository(CategoryRepository);
		
		return await categoryRepository.createCategory({ name });
	}
}