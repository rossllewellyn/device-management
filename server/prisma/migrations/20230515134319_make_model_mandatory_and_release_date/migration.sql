/*
  Warnings:

  - Made the column `device_make` on table `devices` required. This step will fail if there are existing NULL values in that column.
  - Made the column `device_model` on table `devices` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "devices" ADD COLUMN     "device_release_date" TIMESTAMP(3),
ALTER COLUMN "device_make" SET NOT NULL,
ALTER COLUMN "device_model" SET NOT NULL,
ALTER COLUMN "device_activation_code" SET DEFAULT floor(random() * 89999 + 10000)::text;
