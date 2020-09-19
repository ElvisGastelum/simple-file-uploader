import React from 'react';

import FileUploader from 'components/file-uploader';

import './App.css';

const App = () => {
  const {URL_BASE} = process.env
  return (
      <div className="container">
        <FileUploader toUrl={`${URL_BASE}/api/v1/campaigns/upload`}/>
      </div>
  );
};

export default App;
