import { Static, Type as T } from "@sinclair/typebox";
import { RouteGenericInterface } from "fastify";
import { baseDevice, fullDevice } from "../../../types/device";

export const patchDeviceBody = T.Intersect([
  T.Object({ device_id: T.String() }),
  T.Partial(T.Omit(baseDevice, ["device_id"])),
]);
export type PatchDeviceBody = Static<typeof patchDeviceBody>;

export const patchDeviceResponse = fullDevice;
export type PatchDeviceResponse = Static<typeof patchDeviceResponse>;

export interface PatchDeviceRoute extends RouteGenericInterface {
  Body: PatchDeviceBody;
  Reply: PatchDeviceResponse;
}
