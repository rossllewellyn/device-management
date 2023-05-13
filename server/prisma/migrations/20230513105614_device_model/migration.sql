-- CreateTable
CREATE TABLE "devices" (
    "device_id" TEXT NOT NULL,
    "device_status_code" TEXT NOT NULL DEFAULT 'NEW',
    "tenant_id" TEXT,
    "device_make" TEXT,
    "device_model" TEXT,
    "device_activation_code" TEXT NOT NULL DEFAULT floor(random() * 89999 + 10000)::text,
    "device_os_version" TEXT,
    "device_settings_json" JSONB,
    "device_projects_json" JSONB,
    "app_identifier" TEXT,
    "app_version" TEXT,
    "created_datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_datetime" TIMESTAMP(3) NOT NULL,
    "last_updated_ip" TEXT,

    CONSTRAINT "devices_pkey" PRIMARY KEY ("device_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "devices_device_id_key" ON "devices"("device_id");
