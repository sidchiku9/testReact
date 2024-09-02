/* FileUploader.jsx */

import React, { useState } from 'react';
import { FaFileAlt } from 'react-icons/fa'; // Importing file icon from react-icons
import { ProgressBar, Button } from 'react-bootstrap'; // Importing Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import './FileUploader.css'; // Importing custom CSS

const FileUploader = () => {
  const [files, setFiles] = useState([null, null]); // State to hold the uploaded files
  const [uploadProgress, setUploadProgress] = useState(0); // State to hold upload progress

  const handleFileChange = (e, index) => {
    const updatedFiles = [...files];
    updatedFiles[index] = e.target.files[0];
    setFiles(updatedFiles);
  };

  const handleUpload = () => {
    if (!files[0] && !files[1]) {
      alert("Please upload both files before proceeding.");
      return;
    }

    // Simulating file upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        alert("Files uploaded successfully!");
      }
    }, 500);
  };

  return (
    <div className="file-uploader-container">
      <div className="file-input-container">
        {files.map((file, index) => (
          <div key={index} className="file-upload-section">
            <label className="file-upload-label">
              {file ? (
                <>
                  <FaFileAlt size={24} className="file-icon" />
                  <span className="file-name">{file.name}</span>
                </>
              ) : (
                'Choose File'
              )}
              <input
                type="file"
                onChange={(e) => handleFileChange(e, index)}
                className="file-input"
              />
            </label>
          </div>
        ))}
      </div>

      <Button
        variant="primary"
        onClick={handleUpload}
        className="upload-button"
        disabled={!files[0] || !files[1]}
      >
        Upload
      </Button>

      <ProgressBar
        now={uploadProgress}
        className="upload-progress-bar"
        animated
        label={`${uploadProgress}%`}
      />
    </div>
  );
};

export default FileUploader;
