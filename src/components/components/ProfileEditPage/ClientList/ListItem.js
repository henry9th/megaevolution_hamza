import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProfilePicWrapper = styled.div`
  overflow: hidden;
  width: 3rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #cbcaeb;
`;

const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
`;

const ListItem = () => {
  const [show, setShow] = useState(false);

  return (
    <Wrapper>
      <ProfilePicWrapper>
        <ProfilePic />
      </ProfilePicWrapper>
      <h4 className="m-0">Client Profile Name</h4>

      <IconButton onClick={() => setShow(!show)}>
        {show ? (
          <i class="fa fa-eye-slash fa-lg"></i>
        ) : (
          <i class="fa fa-eye fa-lg" aria-hidden="true"></i>
        )}
      </IconButton>
    </Wrapper>
  );
};

export default ListItem;
