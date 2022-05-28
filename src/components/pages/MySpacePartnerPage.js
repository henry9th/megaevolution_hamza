import { createGlobalStyle } from 'styled-components';
import CalenderCard from '../components/MySpacePartnerPage/CalenderCard';
import DescriptionSection from '../components/MySpacePartnerPage/DescriptionSection';
import FilesList from '../components/MySpacePartnerPage/FilesList';
import GiveawayCard from '../components/MySpacePartnerPage/GiveawayCard';
import LinksList from '../components/MySpacePartnerPage/LinksList';
import MessageBox from '../components/MySpacePartnerPage/MessageBox';
import OrderInfoSection from '../components/MySpacePartnerPage/OrderInfoSection';
import ReviewSection from '../components/MySpacePartnerPage/ReviewSection';
import SummarySection from '../components/MySpacePartnerPage/SummarySection';
import TermsAndConditionsSection from '../components/MySpacePartnerPage/TermsAndConditionsSection';
import TipSection from '../components/MySpacePartnerPage/TipSection';
import UploadContentSection from '../components/MySpacePartnerPage/UploadContentSection';

const GlobalStyles = createGlobalStyle`
    header#myHeader.navbar.white {
        background: #212428;
    }
    header#myHeader .logo .d-none{
        display: block !important;
    }
    .title-wrapper {
        border-bottom: 3px solid #EDD6FF
    }
    h2, h5 {
        color: #0E0D39;
    }
    .solid-btn {
        background: radial-gradient(63.11% 63.11% at 31.97% 19.67%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
        linear-gradient(0deg, #FFC543, #FFC543);
        color: #0E0D39;
        border-radius: 1.5rem;
        padding: 0.25rem 0.75rem; 
        border: none;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
        &:hover {
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); 
        }
    }
    .link-btn {
        color: #0E0D39;
        text-decoration: underline;
        font-weight: 700;
        border: none;
        background: none;
    }
    
`;

const MySpacePartnerPage = () => {
  return (
    <section>
      <GlobalStyles />

      <div className="container pt-4">
        <div className="d-flex py-4 justify-content-between flex-wrap title-wrapper">
          <div className="d-flex gap-2 gap-md-4 align-items-center flex-wrap">
            <h2>My Space</h2>
            <div className="pb-2">
              <button className="solid-btn">Partner</button>
            </div>
            <div className="pb-2">
              <button className="link-btn">Switch to Client</button>
            </div>
          </div>

          <h5 className="text-capitalize ">mega@gmail.com</h5>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <OrderInfoSection />
          <DescriptionSection />
          <FilesList />
          <LinksList />
          <CalenderCard />
          <GiveawayCard />
          <TermsAndConditionsSection />
          <UploadContentSection />
          <MessageBox />
          <TipSection />
          <ReviewSection />
          <SummarySection />
        </div>
      </div>
    </section>
  );
};

export default MySpacePartnerPage;
