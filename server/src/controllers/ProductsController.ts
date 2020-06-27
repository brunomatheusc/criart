import { Request, Response } from 'express';
import CreateProductService from './../services/CreateProductService';
import { getCustomRepository } from 'typeorm';
import ProductRepository from './../repositories/ProductsRepository';

interface ProductRequest {
	name: string;
	description: string;
	price: Number;
	weight?: Number;
	typeId: string;
	categoryId: string;
	mainImageUrl: string;
	imageUrls?: string[];
}

class ProductsController {
	public async create(req: Request, res: Response) {
		const { 
			name, description, price, weight, typeId, categoryId, mainImageUrl, imageUrls 
		}: ProductRequest = req.body;
		
		const productService = new CreateProductService();

		const product = productService.execute({ 
			name, description, price, weight, typeId, categoryId, mainImageUrl, imageUrls 
		});

		return res.json({ product });
	}

	public async all(req: Request, res: Response) {

	}

	public async getProductById(req: Request, res: Response) {
		const { productId } = req.params;

		const productRepository = getCustomRepository(ProductRepository);

		const product = await productRepository.getById(productId);

		return res.json({ product });
	}
}

export default new ProductsController;