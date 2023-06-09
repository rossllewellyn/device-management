"use client";

import { useState } from "react";
import styles from "./page.module.css";
import EditDeviceForm from "./edit-device-form";
import AddDeviceForm from "./add-device-form";
import { deleteDevice, postDeviceQuery, postDevice, patchDevice } from "@/api";
import dayjs from "dayjs";

import { AppMode, NewDevice, FullDevice } from "@/types";

export default function Home() {
  const [appMode, setAppMode] = useState<AppMode>(AppMode.VIEWING);
  const [searchText, setSearchText] = useState<string>("");
  const [deviceList, setDeviceList] = useState<FullDevice[]>([]);
  const [deviceToEdit, setDeviceToEdit] = useState<FullDevice | undefined>(undefined);

  const getDevices = async () => {
    const devices = await postDeviceQuery({ search_text: searchText });
    if (!devices) return; // TODO: add handling for this
    setDeviceList(devices);
  };

  const addDevice = async (body: NewDevice) => {
    const newDevice = await postDevice(body);
    if (!newDevice) return; // TODO: add handling for this

    setDeviceList([...deviceList, newDevice]);
  };

  const editDevice = async (body: FullDevice) => {
    const updatedDevice = await patchDevice(body);
    if (!updatedDevice) return; // TODO: add handling for this

    const filteredDeviceList = deviceList.filter((device) => device.device_id !== body.device_id);
    setDeviceList([...filteredDeviceList, updatedDevice]);
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
              onKeyDown={(e) => e.key === "Enter" && getDevices()}
            />
            <button onClick={() => getDevices()}>Search</button>
          </div>

          <div className={styles.container}>
            {deviceList
              .sort((a, b) => {
                const osA = a.device_os_version?.toUpperCase() || "";
                const osB = b.device_os_version?.toUpperCase() || "";

                return osA < osB ? -1 : 0;
              })
              .map((device) => {
                return (
                  <div className={styles.device}>
                    <h3>Brand: {device.device_make}</h3>
                    <h3>Model: {device.device_model}</h3>
                    {device.device_os_version && <h3>OS: {device.device_os_version}</h3>}
                    {device.device_release_date && (
                      <h3>
                        Release Date: {dayjs(device.device_release_date).format("DD/MM/YYYY")}
                      </h3>
                    )}
                    <div className={styles.buttoncontainer}>
                      <button onClick={() => removeDevice(device.device_id)}>Remove</button>
                      <button
                        onClick={() => {
                          // these are batched together
                          setAppMode(AppMode.EDITING);
                          setDeviceToEdit(device);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
      {appMode === AppMode.EDITING && deviceToEdit && (
        <EditDeviceForm device={deviceToEdit} editDevice={editDevice} setAppMode={setAppMode} />
      )}
      {appMode === AppMode.ADDING && (
        <AddDeviceForm addDevice={addDevice} setAppMode={setAppMode} />
      )}
    </main>
  );
}
