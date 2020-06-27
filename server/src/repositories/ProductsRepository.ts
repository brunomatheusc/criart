import { Repository, EntityRepository } from "typeorm";
import Product from '../models/Product';

@EntityRepository(Product)
export default class ProductRepository extends Repository<Product> {
	public async createService(name: string): Promise<Product> {
		const service = this.create({ name });

		return service;
	}
}