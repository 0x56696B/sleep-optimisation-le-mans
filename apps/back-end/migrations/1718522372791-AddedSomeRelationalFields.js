const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class AddedSomeRelationalFields1718522372791 {
    name = 'AddedSomeRelationalFields1718522372791'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "team" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "person" ADD "teamId" integer`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_f35f0d780c095293e4428ee99a1" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_f35f0d780c095293e4428ee99a1"`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "teamId"`);
        await queryRunner.query(`DROP TABLE "team"`);
    }
}
