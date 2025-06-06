import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTextoColum1749239573100 implements MigrationInterface {
    name = 'AddTextoColum1749239573100'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "texto" character varying(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "texto"`);
    }

}
