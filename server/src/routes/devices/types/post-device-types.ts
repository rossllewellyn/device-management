import { Static } from "@sinclair/typebox";
import { RouteGenericInterface } from "fastify";
import { baseDevice, fullDevice } from "../../../types/device";

export const postDeviceBody = baseDevice;
export type PostDeviceBody = Static<typeof baseDevice>;

export const postDeviceResponse = fullDevice;
export type PostDeviceResponse = Static<typeof postDeviceResponse>;

export interface PostDeviceRoute extends RouteGenericInterface {
  Body: PostDeviceBody;
  Reply: PostDeviceResponse;
}
