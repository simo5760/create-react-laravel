import { useState } from "react";
import axios from "axios";

function Upload() {
  const [files, setFiles] = useState([]); // Array for multiple files
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    // Convert FileList to array
    setFiles(Array.from(e.target.files));
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("Please select files first");
      return;
    }

    setUploading(true);
    
    const formData = new FormData();
    
    // Append all files with same key (backend expects array) or unique keys
    files.forEach((file, index) => {
      formData.append(`files`, file); // Backend receives files[]
      // OR: formData.append(`file${index}`, file); // If backend needs separate keys
    });

    try {
      await axios.post("http://127.0.0.1:8000/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(`Uploaded ${files.length} files!`);
      setFiles([]); // Clear after success
    } catch (error) {
      alert(error.response?.data?.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const removeFile = (indexToRemove) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <input 
        type="file" 
        multiple           // Enable multiple file selection
        onChange={handleFileChange} 
      />
      
      {/* Show selected files */}
      {files.length > 0 && (
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              {file.name} ({(file.size / 1024).toFixed(1)} KB)
              <button onClick={() => removeFile(index)}>×</button>
            </li>
          ))}
        </ul>
      )}

      <button 
        onClick={handleUpload} 
        disabled={uploading || files.length === 0}
      >
        {uploading ? `Uploading ${files.length} files...` : `Upload ${files.length} files`}
      </button>
    </div>
  );
}

export default Upload;