import { Request, Response } from 'express';
import CreateCategoryService from './../services/CreateCategoryService';

class CategoriesController {
	public async create(req: Request, res: Response) {
		const { name } = req.body;

		const categoryService = new CreateCategoryService();

		const category = categoryService.execute({ name });

		return res.json({ category });
	}
}

export default new CategoriesController;