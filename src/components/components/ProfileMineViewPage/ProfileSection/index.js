import PersonalCard from './PersonalCard';
import LinksCard from './LinksCard';
import styled from 'styled-components';
import GoldButton from '../GoldButton';

const TextButton = styled.button`
  background: none;
  border: none;
  color: #0e0d39;
  font-weight: 700;
  text-decoration: underline;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const ProfileSection = () => {
  return (
    <div className="mt-5 pt-4">
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
        <div className="d-flex align-items-center gap-4">
          <h3 className="m-0">Profile</h3>
          <span className="badge rounded-pill badge-secondary">Creator</span>
          <TextButton>Switch to Client</TextButton>
        </div>

        <GoldButton
          onClick={() => {
            window.location.href = '/profile/edit';
          }}
          className="mx-auto mx-sm-0 mt-3 mt-sm-0"
        >
          Edit Profile
        </GoldButton>
      </div>

      <div className="row align-items-stretch">
        <div className="col-12 col-lg-3">
          <PersonalCard />
        </div>
        <div className="col-12 col-lg-9 mt-3 mt-lg-0">
          <LinksCard />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
