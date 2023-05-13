import { Static, Type as T } from "@sinclair/typebox";
import { RouteGenericInterface } from "fastify";
import { fullDevice } from "../../../types/device";

export const deleteDeviceBody = T.Object({ device_id: T.String() });
export type DeleteDeviceBody = Static<typeof deleteDeviceBody>;

export const deleteDeviceResponse = fullDevice;
export type DeleteDeviceResponse = Static<typeof deleteDeviceResponse>;

export interface DeleteDeviceRoute extends RouteGenericInterface {
  Body: DeleteDeviceBody;
  Reply: DeleteDeviceResponse;
}
