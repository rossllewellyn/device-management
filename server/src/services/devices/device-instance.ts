import { Device } from "@prisma/client";

export class DeviceInstance {
  constructor(private readonly data: Device) {}

  get apiFormat() {
    return {
      ...this.data,
      tenant_id: this.data.tenant_id || undefined,
      device_release_date: this.data.device_release_date?.toISOString() || undefined,
      device_os_version: this.data.device_os_version || undefined,
      device_settings_json: this.data.device_settings_json || undefined,
      device_projects_json: this.data.device_projects_json || undefined,
      app_identifier: this.data.app_identifier || undefined,
      app_version: this.data.app_version || undefined,
      created_datetime: this.data.created_datetime.toISOString(),
      last_updated_datetime: this.data.last_updated_datetime.toISOString(),
      last_updated_ip: this.data.last_updated_ip || undefined,
    };
  }
}
