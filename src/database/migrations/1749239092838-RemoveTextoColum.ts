import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveTextoColum1749239092838 implements MigrationInterface {
    name = 'RemoveTextoColum1749239092838'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "texto" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "texto"`);
    }

}
