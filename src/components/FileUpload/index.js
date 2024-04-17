import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';

function FileUpload({ onDrop, accept }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    onDrop
  });

  return (
    <div>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center">
          {isDragActive ? (
            <p className="dropzone-content">Release to drop the files here</p>
          ) : (
            <p className="dropzone-content">
              Drag & drop your files here, or click to select files
            </p>
          )}
          <button type="button" className="btn">
            Click to select files
          </button>
        </div>
      </div>
    </div>
  );
}

FileUpload.propTypes = {
  onDrop: PropTypes.func,
  accept: PropTypes.string
};

export default FileUpload;
