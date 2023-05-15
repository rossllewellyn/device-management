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
  return (
    <main className={styles.main}>
      <h1>Device Management ☎️</h1>
      {appMode === AppMode.VIEWING && <>Viewing Devices</>}
      {appMode === AppMode.EDITING && <EditDeviceForm />}
      {appMode === AppMode.ADDING && <AddDeviceForm />}
    </main>
  );
}
