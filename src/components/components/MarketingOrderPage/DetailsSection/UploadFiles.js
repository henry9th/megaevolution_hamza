import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { ImageIcon } from '../../ImageGallery/icons';

const Card = styled.div`
  width: 100%;
  flex: 1;
  padding: 2rem 1rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 3px solid ${(props) => (props.drop ? '#0e0d39aa' : '#edd6ff')};
  background: ${(props) => props.background || '#ffffff'};
  position: relative;
  color: #0e0d39;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }

  @media (max-width: 425px) {
    padding: 0.75rem 0.365rem;
  }

  @media (max-width: 375px) {
    padding: 1rem 0.25rem;
  }
`;

const Input = styled.input``;

const Button = styled.button`
  color: #ffffff;
  background: #0e0d39;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
`;

const UploadFiles = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="w-100 flex-grow-1 d-flex flex-column">
      <h4 className="mb-4">Upload Files</h4>
      <Card
        {...getRootProps()}
        {...{
          drop: isDragActive,
        }}
      >
        <Input {...getInputProps()} />
        <ImageIcon />
        <h3 className="m-0">Drag and drop files</h3>
        <p className="m-0">only jpg, png, jpeg format are allowed</p>
        <Button>Browse Now</Button>
      </Card>
    </div>
  );
};

export default UploadFiles;
