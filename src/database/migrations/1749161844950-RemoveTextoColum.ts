import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveTextoColum1749161844950 implements MigrationInterface {
    name = 'RemoveTextoColum1749161844950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "texto"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "texto" character varying(255) NOT NULL`);
    }

}
