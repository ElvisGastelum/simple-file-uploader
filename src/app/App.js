import React from 'react';

import FileUploader from 'components/file-uploader';

import './App.css';

const App = () => {
  const { URL_BASE, CAMPAIGN_ID } = process.env;

  return (
    <div className="container">
      <FileUploader toUrl={`${URL_BASE}/api/v1/campaigns/${CAMPAIGN_ID}/upload-video`} />
    </div>
  );
};

export default App;
