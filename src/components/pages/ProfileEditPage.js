import { createGlobalStyle } from 'styled-components';
import PackagesSection from '../components/ProfileEditPage/PackagesSection';
import ProfileSection from '../components/ProfileEditPage/ProfileSection';
import VisualContent from '../components/ProfileEditPage/VisualContent';
import ClientList from '../components/ProfileEditPage/ClientList';
import DescriptionSection from '../components/ProfileEditPage/DescriptionSection';
import InformationCard from '../components/ProfileEditPage/InformationCard';
import GoldButton from '../components/ProfileEditPage/GoldButton';

const GlobalStyles = createGlobalStyle`
    header#myHeader.navbar.white {
        background: #212428;
    }
    header#myHeader .logo .d-none{
        display: block !important;
    }

    *, h3, h4, h5, input {
        font-family: 'Space Grotesk';
    }

    h3, h4, h5, .h3, .h4, .h5 {
        color: #0E0D39;
    }

    .badge-secondary {
        background-color: #EDD6FF;
        color: #0E0D39;
        padding: 0.5rem 1rem;
    }

    .text-primary-dark {
      color: #0E0D39
    }

    .text-primary-light {
      color: #EDD6FF;
    }

    .modal-content {
      border-radius: 1rem;
      overflow: hidden;
    }
`;

const ProfileEditPage = () => {
  return (
    <section>
      <GlobalStyles />

      <div className="container">
        <ProfileSection />
        <PackagesSection />
        <div className="row">
          <div className="col-12 col-md-7">
            <VisualContent />
          </div>
          <div className="col-12 col-md-5">
            <ClientList />
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-12 col-md-7 col-lg-8">
            <DescriptionSection />
          </div>
          <div className="col-12 col-md-5 col-lg-4">
            <InformationCard />
          </div>
        </div>
        <div className="d-flex mt-5 pt-3 flex-wrap align-items-center justify-content-center gap-4">
          <GoldButton>Discard Changes</GoldButton>
          <GoldButton>Save Changes</GoldButton>
        </div>
      </div>
    </section>
  );
};

export default ProfileEditPage;
