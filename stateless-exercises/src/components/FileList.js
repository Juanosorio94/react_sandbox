import React from 'react';
import PropTypes from 'prop-types';
import Time from './Time';
import './FileList.css'
const FileList = ({ files }) => (
  <div className="file-list">
      {files.map(file => (
        <FileListItem key={file.id} file={file} />
      ))}
  </div>
);

FileList.propTypes = {
  files: PropTypes.array
}

const FileListItem = ({ file }) => (
  <div className="file-list-item">
    <FileName file={file}/>
  </div>
);

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
}

const FileName = ({file}) => (
  <>
    <span className='file-icon'>
      <FileIcon file={file}/>
    </span>
    <span className="file-name">
      {file.name}
    </span>
    <span className='commit-message'>
      <CommitMessage commit={file.latestCommit} /></span>
    <span className="age">
      <Time time={file.updated_at} />
    </span>
  </>
);

FileName.propTypes = {
  file: PropTypes.object.isRequired
}

const FileIcon = ({ file }) => {
  let icon = 'fa-file-text-o';
  if(file.type === 'folder'){
    icon = 'fa-folder';
  }

  return (
      <i className={`fa ${icon}`} />
  )
};

FileIcon.propTypes = {
  file: PropTypes.shape({
    type: PropTypes.string
  }).isRequired
}


const CommitMessage  = ({commit}) => (
  <>
    {commit.message}
  </>
);

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
}

export default FileList;