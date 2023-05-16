-- AlterTable
ALTER TABLE "devices" ALTER COLUMN "device_activation_code" SET DEFAULT floor(random() * 89999 + 10000)::text;
