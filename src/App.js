import { useCallback, useState } from 'react';
import { createId } from '@paralleldrive/cuid2';

import FileUpload from './components/FileUpload';
import FileTable from './components/FileTable';
import './index.css';
import './App.css';

function App() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        setFiles((prevState) => [
          ...prevState,
          { id: createId(), file, src: e.target.result }
        ]);
      };

      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <main className="App">
      <h1 className="text-center">File Uploader</h1>
      <FileUpload onDrop={onDrop} accept={'image/*'} />
      <FileTable files={files} />
    </main>
  );
}

export default App;
