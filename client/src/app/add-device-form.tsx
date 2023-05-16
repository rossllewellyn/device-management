import { AppMode } from "@/types";
import styles from "./page.module.css";
import { ChangeEvent, useState } from "react";

const AddDeviceForm = ({
  addDevice,
  setAppMode,
}: {
  addDevice: Function;
  setAppMode: Function;
}) => {
  const [formData, setFormData] = useState({});
  const [releaseDate, setReleaseDate] = useState<Date>();

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className={styles.form}>
      <label>
        *Device Id:
        <input type="text" name="device_id" onChange={handleFormChange} />
      </label>
      <label>
        *Brand:
        <input type="text" name="device_make" onChange={handleFormChange} />
      </label>
      <label>
        *Model:
        <input type="text" name="device_model" onChange={handleFormChange} />
      </label>
      <label>
        OS:
        <input type="text" name="device_os_version" onChange={handleFormChange} />
      </label>

      <label>
        Tenant Id:
        <input type="text" name="tenant_id" onChange={handleFormChange} />
      </label>
      <label>
        App Identifier:
        <input type="text" name="app_identifier" onChange={handleFormChange} />
      </label>
      <label>
        App Version:
        <input type="text" name="app_version" onChange={handleFormChange} />
      </label>
      <label>
        Release Date:
        <input
          type="date"
          name="device_release_date"
          onChange={(e) => setReleaseDate(new Date(e.target.value))}
        />
      </label>
      <label>
        Status Code:
        <select name="device_status_code" onChange={handleFormChange}>
          <option value="NEW">NEW</option>
          <option value="USED">USED</option>
          <option value="REFURBISHED">REFURBISHED</option>
          <option value="BROKEN">BROKEN</option>
        </select>
      </label>

      <div className={styles.buttoncontainer}>
        <button
          type="submit"
          onClick={() => {
            // these are batched together
            setAppMode(AppMode.VIEWING);
            addDevice({
              ...formData,
              device_release_date: releaseDate?.toISOString(),
            });
          }}
        >
          Save
        </button>
        <button onClick={() => setAppMode(AppMode.VIEWING)}>Cancel</button>
      </div>
    </form>
  );
};

export default AddDeviceForm;
