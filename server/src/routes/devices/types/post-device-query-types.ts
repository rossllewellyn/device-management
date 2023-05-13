import { Static, Type as T } from "@sinclair/typebox";
import { RouteGenericInterface } from "fastify";
import { fullDevice } from "../../../types/device";

export const deviceQueryBody = T.Object({
  search_text: T.Optional(T.String()),
});
export type DeviceQueryBody = Static<typeof deviceQueryBody>;

export const deviceQueryResponse = T.Array(fullDevice);
export type DeviceQueryResponse = Static<typeof deviceQueryResponse>;

export interface PostDeviceQueryRoute extends RouteGenericInterface {
  Body: DeviceQueryBody;
  Reply: DeviceQueryResponse;
}
