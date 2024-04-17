import { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const FileTable = ({ files }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [searhKey, setSearchKey] = useState('');

  const handleChangeSearchKey = (e) => {
    e.preventDefault();
    setSearchKey(e.target.value);
  };

  const filteredFiels = searhKey
    ? files.filter(({ file }) =>
        file.name.toLowerCase().includes(searhKey.toLowerCase())
      )
    : files;

  return (
    <div className="files">
      <div className="file-table">
        <div className="file-search">
          Search:&nbsp;
          <input
            values={searhKey}
            onChange={handleChangeSearchKey}
            placeholder="Search file by name"
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Size</th>
              <th>Type</th>
              <th>Last modified</th>
            </tr>
          </thead>
          <tbody>
            {filteredFiels.map(({ file, id, src }) => (
              <tr key={id} onClick={() => setSelectedFile(src)}>
                <td>{file.name}</td>
                <td>{file.size / 1024}KB</td>
                <td>{file.type}</td>
                <td>{new Date(file.lastModified).toISOString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="file-preview">
        <img src={selectedFile} alt="image-preview" />
      </div>
    </div>
  );
};

FileTable.propTypes = {
  files: PropTypes.array
};

export default FileTable;
