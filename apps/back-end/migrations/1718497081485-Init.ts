import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1718497081485 implements MigrationInterface {
    name = 'Init1718497081485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "base_model" ("id" SERIAL NOT NULL, CONSTRAINT "PK_6858b0bfee6d486b76e323b3e9b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "activity_level" ("id" SERIAL NOT NULL, "level" integer NOT NULL, CONSTRAINT "PK_92105db166f24fc1b84840ebf0b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shift" ("id" SERIAL NOT NULL, "raceName" character varying NOT NULL, CONSTRAINT "PK_53071a6485a1e9dc75ec3db54b9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "person" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, "gender" character varying NOT NULL, "experience" integer NOT NULL, "weight" integer NOT NULL, "height" integer NOT NULL, "sleepTime" integer NOT NULL, "role" character varying NOT NULL, "activityLevelId" integer, "shiftsId" integer, CONSTRAINT "REL_c800bf5070726e0f72c4a8cc12" UNIQUE ("activityLevelId"), CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_c800bf5070726e0f72c4a8cc120" FOREIGN KEY ("activityLevelId") REFERENCES "activity_level"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_bded149146d7f4e35066aa81bd1" FOREIGN KEY ("shiftsId") REFERENCES "shift"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_bded149146d7f4e35066aa81bd1"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_c800bf5070726e0f72c4a8cc120"`);
        await queryRunner.query(`DROP TABLE "person"`);
        await queryRunner.query(`DROP TABLE "shift"`);
        await queryRunner.query(`DROP TABLE "activity_level"`);
        await queryRunner.query(`DROP TABLE "base_model"`);
    }

}
