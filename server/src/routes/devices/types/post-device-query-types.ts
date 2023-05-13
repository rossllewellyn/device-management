import { Static, Type as T } from "@sinclair/typebox";
import { RouteGenericInterface } from "fastify";
import { fullDevice } from "../../../types/device";

export const postDeviceQueryBody = T.Object({
  search_text: T.Optional(T.String()),
});
export type PostDeviceQueryBody = Static<typeof postDeviceQueryBody>;

export const postDeviceQueryResponse = T.Array(fullDevice);
export type PostDeviceQueryResponse = Static<typeof postDeviceQueryResponse>;

export interface PostDeviceQueryRoute extends RouteGenericInterface {
  Body: PostDeviceQueryBody;
  Reply: PostDeviceQueryResponse;
}
