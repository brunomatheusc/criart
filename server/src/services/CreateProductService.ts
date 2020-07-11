import Product from "../models/Product";
import { getCustomRepository } from 'typeorm';
import ProductRepository from './../repositories/ProductsRepository';

interface ProductDTO {
	name: string;
	description: string;
	price: Number;
	weight?: Number;
	typeId: string;
	categoryId: string;
	mainImage: string;
	imageUrls?: string[];
}

export default class CreateProductService {
	public async execute(product: ProductDTO): Promise<Product> {
		const productRepository = getCustomRepository(ProductRepository);

		const newProduct = await productRepository.createProduct(product);

		return newProduct;
	}
}