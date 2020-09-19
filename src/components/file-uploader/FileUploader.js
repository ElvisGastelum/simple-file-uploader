import React from 'react';
import { useChunkFileUpload } from './hooks/useChunkFileUpload';
import Error from './compoenents/Error';

const FileUploader = ({ toUrl }) => {
  const [handleChange, progress, success, error] = useChunkFileUpload({
    endPoint: toUrl,
    chunkSize: 5120,
  });

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <p>Click on the "Choose File" button to upload a file:</p>

      <form>
        <input type="file" name="upload file" onChange={handleChange} />
      </form>
      {progress != 0 && progress < 100 && <h2>Progress: {Math.round(progress)}%</h2>}
      {success && <h2>Upload Complete! :)</h2>}
    </div>
  );
};

export default FileUploader;
