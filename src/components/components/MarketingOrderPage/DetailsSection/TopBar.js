import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import styled from 'styled-components';
import { CheckoutIcon, DownloadIcon } from '../../ImageGallery/icons';

const Button = styled.button`
  color: ${(props) => (props.textWhite ? '#FFFFFF' : '#0e0d39')};
  background: ${(props) =>
    props.bgColor ? props.bgColor : props.selected ? '#EDD6FF' : '#FFFFFF'};
  border: 2px solid ${(props) => (props.bgColor ? props.bgColor : ' #edd6ff')};
  border-radius: 0.75rem;
  padding: 0.125rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TopBar = ({ clear }) => {
  const [selectedForm, setSelectedForm] = useState(1);

  return (
    <div className="d-flex align-items-center flex-wrap gap-3 justify-content-center justify-content-md-between">
      <Stack direction="horizontal" gap={2} className="">
        <Button
          selected={selectedForm === 1}
          onClick={() => setSelectedForm(1)}
        >
          Form 1
        </Button>
        <Button
          selected={selectedForm === 2}
          onClick={() => setSelectedForm(2)}
        >
          Form 2
        </Button>
        <Button
          selected={selectedForm === 3}
          onClick={() => setSelectedForm(3)}
        >
          Form 3
        </Button>
      </Stack>
      <Stack direction="horizontal" gap={2}>
        <Button textWhite bgColor="#FFC543">
          Check out <CheckoutIcon />
        </Button>
        <Button textWhite bgColor="#0080FF">
          Save <DownloadIcon />
        </Button>
        <Button textWhite bgColor="#EC595A" onClick={clear}>
          Clear <i className="fa fa-undo"></i>
        </Button>
      </Stack>
    </div>
  );
};

export default TopBar;
