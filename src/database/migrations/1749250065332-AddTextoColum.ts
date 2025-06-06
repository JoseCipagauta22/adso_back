import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTextoColum1749250065332 implements MigrationInterface {
    name = 'AddTextoColum1749250065332'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "texto" character varying(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "texto"`);
    }

}
