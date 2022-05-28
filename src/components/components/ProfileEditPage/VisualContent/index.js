import styled from 'styled-components';
import Card from '../Card';
import { useState } from 'react';
import UploadModal from './UploadModal';

const Button = styled.button`
  padding: 0.25rem 0.75rem;
  border: none;
  background: #cbcaeb;
  border-radius: 0.5rem;
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const VisualContent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <div className="mt-5 pt-4">
      <div className="d-flex align-items-center gap-4">
        <h3 className="m-0">Visual Content *</h3>
        <Button onClick={() => setShow(true)}>Manage files</Button>
      </div>

      <Card className="mt-4 p-5 ">
        <div className="d-flex p-5 my-3 w-100 h-100 flex-column justify-content-center align-items-center">
          <i
            className="fa fa-picture-o fa-4x text-primary-dark"
            aria-hidden="true"
          ></i>
          <h4 className="mt-3">Upload Your Visual Contents</h4>
        </div>
      </Card>

      <UploadModal handleClose={handleClose} show={show} />
    </div>
  );
};

export default VisualContent;
