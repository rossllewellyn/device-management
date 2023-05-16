export enum AppMode {
  VIEWING,
  EDITING,
  ADDING,
}

enum StatusCode {
  NEW,
  USED,
  REFURBISHED,
  BROKEN,
}

export type NewDevice = {
  device_id: string;
  device_status_code: StatusCode;
  tenant_id?: string;
  device_make: string;
  device_model: string;
  device_release_date?: string;
  device_os_version?: string;
  device_settings_json?: JSON;
  device_projects_json?: JSON;
  app_identifier?: string;
  app_version?: string;
};

export type FullDevice = NewDevice & {
  device_activation_code: string;
  created_datetime: string;
  last_updated_datetime: string;
  last_updated_ip?: string;
};
