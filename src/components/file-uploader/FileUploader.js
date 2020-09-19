import React from 'react';
import { useFileUpload } from './hooks/useFileUpload';
import Error from './compoenents/Error';

const FileUploader = ({ toUrl }) => {
  const [handleChange, progress, success, error] = useFileUpload(toUrl);
  if (error) {
    return <Error />;
  }

  return (
    <div>
      <p>Click on the "Choose File" button to upload a file:</p>

      <form>
        <input type="file" name="upload file" onChange={handleChange} />
      </form>
      {
        progress != 0 && progress < 100 && <h2>Progress: {Math.round(progress)}%</h2>
      }
      {
        success && <h2>Upload Complete! :)</h2>
      }
    </div>
  );
};

export default FileUploader;
