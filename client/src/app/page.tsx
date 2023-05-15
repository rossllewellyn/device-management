"use client";

import { useState } from "react";
import styles from "./page.module.css";
import EditDeviceForm from "./edit-device-form";
import AddDeviceForm from "./add-device-form";
import { deleteDevice, postDeviceQuery } from "@/api";
import { PostDeviceQueryResponse } from "../../../server/src/routes/devices/types/post-device-query-types";
import { PostDeviceResponse } from "../../../server/src/routes/devices/types/post-device-types";

enum AppMode {
  VIEWING,
  EDITING,
  ADDING,
}

export default function Home() {
  const [appMode, setAppMode] = useState<AppMode>(AppMode.VIEWING);
  const [searchText, setSearchText] = useState<string>("");
  const [deviceList, setDeviceList] = useState<PostDeviceQueryResponse>([]);
  const [deviceToEdit, setDeviceToEdit] = useState<PostDeviceResponse | undefined>(undefined);

  const getDevices = async () => {
    const devices = await postDeviceQuery({ search_text: searchText });
    if (!devices) return; // TODO: add handling for this
    setDeviceList(devices);
  };

  const removeDevice = async (deviceId: string) => {
    const deletedDevice = await deleteDevice({ device_id: deviceId });
    if (!deletedDevice) return; // TODO: add handling for this

    const filteredDeviceList = deviceList.filter((device) => device.device_id !== deviceId);
    setDeviceList([...filteredDeviceList]);
  };

  return (
    <main className={styles.main}>
      <h1>Device Management ☎️</h1>

      {appMode === AppMode.VIEWING && (
        <div className={styles.viewing}>
          <button onClick={() => setAppMode(AppMode.ADDING)}>Add Device</button>
          <div>
            <input
              placeholder="Search for devices ..."
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={() => getDevices()}>Search</button>
          </div>

          {deviceList.map((device) => {
            return (
              <div className={styles.device}>
                <h3>Brand: {device.device_make}</h3>
                <h3>Model: {device.device_model}</h3>
                <h3>OS: {device.device_os_version}</h3>
                <button onClick={() => removeDevice(device.device_id)}>Remove</button>
                <button
                  onClick={() => {
                    // these are batched together
                    setAppMode(AppMode.EDITING);
                    setDeviceToEdit(device);
                  }}
                >
                  Edit Device
                </button>
              </div>
            );
          })}
        </div>
      )}
      {appMode === AppMode.EDITING && deviceToEdit && <EditDeviceForm device={deviceToEdit} />}
      {appMode === AppMode.ADDING && <AddDeviceForm />}
    </main>
  );
}
