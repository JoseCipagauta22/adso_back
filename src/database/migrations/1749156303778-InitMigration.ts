import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1749156303778 implements MigrationInterface {
    name = 'InitMigration1749156303778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "texto" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "texto"`);
    }

}
