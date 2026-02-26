import React, { useState } from "react";
import { uploadCSV } from "../api/clinic";
import Navbar from "../components/Navbar";

const UploadCSV = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return setMessage("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await uploadCSV(formData);
      setMessage(`Successfully uploaded ${res.data.imported} records`);
    } catch (err) {
      setMessage(err.response?.data?.error || "Upload failed");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h1 className="page-title">Upload CSV 📤</h1>

        <div className="page-card">
          {message && <p className="mb-4 text-sm text-gray-700">{message}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
            <div className="upload-box">
              <input
                type="file"
                accept=".csv"
                onChange={(e) => setFile(e.target.files[0])}
                className="modern-input w-full"
              />
            </div>

            <button className="modern-btn">Upload</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadCSV;
