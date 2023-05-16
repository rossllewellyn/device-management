"use server";

import { NewDevice, FullDevice } from "./types";

const port = process.env.SERVER_PORT || 3100;
const hostname = process.env.NODE_ENV === "production" ? "server" : "localhost";

const baseURL = `http://${hostname}:${port}`;

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

export const postDeviceQuery = async (body: { search_text: string }) => {
  const url = `${baseURL}/devices/query`;
  const method = "POST";

  const response: FullDevice[] = await fetchFactory(url, method, body);
  return response;
};

export const postDevice = async (body: NewDevice) => {
  const url = `${baseURL}/devices`;
  const method = "POST";

  const response: FullDevice = await fetchFactory(url, method, body);
  return response;
};

export const patchDevice = async (body: NewDevice) => {
  const url = `${baseURL}/devices`;
  const method = "PATCH";

  const response: FullDevice = await fetchFactory(url, method, body);
  return response;
};

export const deleteDevice = async (body: { device_id: string }) => {
  const url = `${baseURL}/devices`;
  const method = "DELETE";

  const response: FullDevice = await fetchFactory(url, method, body);
  return response;
};
