"use client";

import { useState } from "react";
import styles from "./page.module.css";
import EditDeviceForm from "./edit-device-form";
import AddDeviceForm from "./add-device-form";
import { postDeviceQuery } from "@/api";
import { PostDeviceQueryResponse } from "../../../server/src/routes/devices/types/post-device-query-types";

enum AppMode {
  VIEWING,
  EDITING,
  ADDING,
}

export default function Home() {
  const [appMode, setAppMode] = useState<AppMode>(AppMode.VIEWING);
  const [searchText, setSearchText] = useState<string>("");
  const [deviceList, setDeviceList] = useState<PostDeviceQueryResponse>([]);

  const getDevices = async () => {
    const devices = await postDeviceQuery({ search_text: searchText });
    if (!devices) return; // TODO: add handling for this
    setDeviceList(devices);
  };

  return (
    <main className={styles.main}>
      <h1>Device Management ☎️</h1>

      {appMode === AppMode.VIEWING && (
        <div className={styles.viewing}>
          <button onClick={() => setAppMode(AppMode.VIEWING)}>Add Device</button>
          <div>
            <input
              placeholder="Search for devices ..."
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={() => getDevices()}>Search</button>
          </div>

          {deviceList.map((device) => {
            return <></>;
          })}
        </div>
      )}
      {appMode === AppMode.EDITING && <EditDeviceForm />}
      {appMode === AppMode.ADDING && <AddDeviceForm />}
    </main>
  );
}
