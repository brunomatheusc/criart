import { Request, Response } from 'express';

class ProductsController {
	public async create(req: Request, res: Response) {
		const { name } = req.body;			
	}

	public async all(req: Request, res: Response) {

	}

	public async getProductById(req: Request, res: Response) {
		const { productId } = req.params;
	}
}

export default new ProductsController;