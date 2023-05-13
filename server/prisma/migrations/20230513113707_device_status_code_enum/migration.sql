/*
  Warnings:

  - The `device_status_code` column on the `devices` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "DeviceStatusCode" AS ENUM ('NEW', 'USED', 'REFURBISHED', 'BROKEN');

-- AlterTable
ALTER TABLE "devices" DROP COLUMN "device_status_code",
ADD COLUMN     "device_status_code" "DeviceStatusCode" NOT NULL DEFAULT 'NEW',
ALTER COLUMN "device_activation_code" SET DEFAULT floor(random() * 89999 + 10000)::text;
