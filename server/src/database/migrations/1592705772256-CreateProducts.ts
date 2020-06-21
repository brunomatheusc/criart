import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1592705772256 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'products',
			columns: [
				{ name: 'id', type: 'uuid', isPrimary: true, generationStrategy: "uuid", default: 'uuid_generate_v4()' },
				{ name: 'description', type: 'varchar' },
				{ name: 'price', type: 'numeric' },
				{ name: 'weight', type: 'numeric' },
				{ name: 'typeId', type: 'varchar' },
				{ name: 'categoryId', type: 'varchar' },
				{ name: 'imageUrls', type: 'varchar array' },
				{ name: 'createdAt', type: 'timestamp', default: 'now()' },
				{ name: 'updatedAt', type: 'timestamp', default: 'now()' },
			]
		}));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('products');
    }
}
