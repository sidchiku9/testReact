/* FileUploader.jsx */

import React, { useState } from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FileUploader.css';
import axios from 'axios'; // Import axios for making HTTP requests

const FileUploader = () => {
  const [files, setFiles] = useState([null, null]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e, index) => {
    const updatedFiles = [...files];
    updatedFiles[index] = e.target.files[0];
    setFiles(updatedFiles);
  };

  const handleUpload = async () => {
    if (!files[0] || !files[1]) {
      alert('Please upload both files before proceeding.');
      return;
    }

    const formData = new FormData();
    formData.append('file1', files[0]);
    formData.append('file2', files[1]);

    try {
      const response = await axios.post('https://httpbin.org/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
      });

      if (response.status === 200) {
        alert('Files uploaded successfully!');
        console.log('Response:', response.data);
      } else {
        alert('Failed to upload files.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('An error occurred while uploading files.');
    }
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
