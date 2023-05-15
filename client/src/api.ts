"use server";

import {
  PostDeviceQueryBody,
  PostDeviceQueryResponse,
} from "../../server/src/routes/devices/types/post-device-query-types";

const baseURL = "http://localhost:3100";

const fetchFactory = async (url: string, method: string, body: any) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-cache",
    });

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const postDeviceQuery = async (body: PostDeviceQueryBody) => {
  const url = `${baseURL}/devices/query`;
  const method = "POST";

  const response: PostDeviceQueryResponse = await fetchFactory(url, method, body);
  return response;
};
