import styled from 'styled-components';
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

const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.h4`
  width: 100%;
  margin: 1rem auto;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const PersonalCard = () => {
  const profilePic = '';
  const name = 'John Doe';

  return (
    <MaxWidthCard>
      <ProfilePicWrapper>
        {profilePic && (
          <ProfilePic
            src={
              typeof profilePic === 'string'
                ? profilePic
                : URL.createObjectURL(profilePic)
            }
          />
        )}
      </ProfilePicWrapper>

      <Name>{name}</Name>
    </MaxWidthCard>
  );
};

export default PersonalCard;
