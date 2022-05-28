import styled from 'styled-components';
import { useState } from 'react';
import Card from '../Card';

const MaxWidthCard = styled(Card)`
  max-width: 20rem;
  margin: 0 auto;
`;

const ProfilePicWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #edd6ff4d;
  color: #edd6ff;
  margin: 0 auto 1.5rem;
`;

const ProfileInput = styled.input.attrs((props) => ({
  type: 'file',
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;

  &:file {
    cursor: pointer;
  }
`;

const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InputWrapper = styled.div`
  max-width: 12rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border: 3px solid #edd6ff;
  border-radius: 1rem;
  color: #0e0d39;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 2.5rem 0.5rem 1.5rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const PencilIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`;

const PersonalCard = () => {
  const [profilePic, setProfilePic] = useState('');
  const [name, setName] = useState('John Doe');

  return (
    <MaxWidthCard>
      <ProfilePicWrapper>
        {profilePic ? (
          <ProfilePic
            src={
              typeof profilePic === 'string'
                ? profilePic
                : URL.createObjectURL(profilePic)
            }
          />
        ) : (
          <i class="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
        )}
        <ProfileInput
          onChange={(e) => setProfilePic(e.target.files[0])}
          accept="image/*"
        />
      </ProfilePicWrapper>

      <InputWrapper>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
        <PencilIconWrapper>
          <i class="fa fa-pencil fa-lg" aria-hidden="true"></i>
        </PencilIconWrapper>
      </InputWrapper>
    </MaxWidthCard>
  );
};

export default PersonalCard;
