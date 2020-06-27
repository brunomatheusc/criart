import { Repository, EntityRepository } from "typeorm";
import Product from '../models/Product';

interface ProductDTO {
	name: string;
	description: string;
	price: Number;
	weight?: Number;
	typeId: string;
	categoryId: string;
	mainImageUrl: string;
	imageUrls?: string[];
}

@EntityRepository(Product)
export default class ProductRepository extends Repository<Product> {
	public async createProduct(newProduct: ProductDTO): Promise<Product> {
		const product = this.create(newProduct);

		await this.save(product);

		return product;
	}

	public async getAll(): Promise<Product[]> {
		return await this.find();
	}

	public async getById(productId: string): Promise<Product | undefined> {
		return await this.findOne(productId);
	}
}