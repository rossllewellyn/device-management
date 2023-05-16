import { Static, Type as T } from "@sinclair/typebox";
import { StringEnum } from "../helpers/string-enum";
import { DeviceStatusCode } from "@prisma/client";

const deviceStatusCodeEnum = StringEnum(Object.values(DeviceStatusCode));

const deviceSettingsJson = T.Object({
  // TODO
});

const deviceProjectsJson = T.Object({
  // TODO
});

export const baseDevice = T.Object({
  device_id: T.String(),
  device_status_code: T.Optional(deviceStatusCodeEnum),
  tenant_id: T.Optional(T.String()),
  device_make: T.String(),
  device_model: T.String(),
  device_release_date: T.Optional(T.String()),
  device_os_version: T.Optional(T.String()),
  device_settings_json: T.Optional(deviceSettingsJson),
  device_projects_json: T.Optional(deviceProjectsJson),
  app_identifier: T.Optional(T.String()),
  app_version: T.Optional(T.String()),
});
export type NewDevice = Static<typeof baseDevice>;

export const fullDevice = T.Intersect([
  baseDevice,
  T.Object({
    device_activation_code: T.String(),
    created_datetime: T.String(),
    last_updated_datetime: T.String(),
    last_updated_ip: T.Optional(T.String()),
  }),
]);
