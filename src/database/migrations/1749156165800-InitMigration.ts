import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1749156165800 implements MigrationInterface {
    name = 'InitMigration1749156165800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createAt"`);
    }

}
