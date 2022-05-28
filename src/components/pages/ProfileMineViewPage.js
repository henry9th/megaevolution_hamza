import { createGlobalStyle } from 'styled-components';
import ClientList from '../components/ProfileMineViewPage/ClientList';
import DescriptionSection from '../components/ProfileMineViewPage/DescriptionSection';
import InformationCard from '../components/ProfileMineViewPage/InformationCard';
import PackagesSection from '../components/ProfileMineViewPage/PackagesSection';
import ProfileSection from '../components/ProfileMineViewPage/ProfileSection';
import ReviewSection from '../components/ProfileMineViewPage/ReviewSection';
import VisualContent from '../components/ProfileMineViewPage/VisualContent';

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

.text-primary-muted {
    color: #C7C7C7;
}

.text-gold {
  color:  #FFC543
}

.modal-content {
  border-radius: 1rem;
}
`;

const ProfileMineViewPage = () => {
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
        <ReviewSection />
      </div>
    </section>
  );
};

export default ProfileMineViewPage;
