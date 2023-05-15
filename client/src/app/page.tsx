"use client";

import { useState } from "react";
import styles from "./page.module.css";
import EditDeviceForm from "./edit-device-form";
import AddDeviceForm from "./add-device-form";

enum AppMode {
  VIEWING,
  EDITING,
  ADDING,
}

export default function Home() {
  const [appMode, setAppMode] = useState<AppMode>(AppMode.VIEWING);
  const [searchText, setSearchText] = useState<string>("");

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
            <button onClick={() => {}}>Search</button>
          </div>
        </div>
      )}
      {appMode === AppMode.EDITING && <EditDeviceForm />}
      {appMode === AppMode.ADDING && <AddDeviceForm />}
    </main>
  );
}
