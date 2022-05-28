import { createGlobalStyle } from 'styled-components';
import {
  DiscordIcon,
  MetamaskIcon,
  TwitterIcon,
  GmailIcon,
  TelegramIcon,
  InstagramIcon,
} from '../ImageGallery/icons';

const GlobalStyles = createGlobalStyle`
    h3 {
        color: #0E0D39;
    }
    .giveaway-card {
        width: 100%;
        border-radius: 1rem;
        border: 3px solid #EDD6FF;
        background: #FFFFFF;
        padding: 2rem 1.5rem;
    }
    h5 {
        font-weight: 500;
        color: #0E0D39;
        margin: 0;
    }
    a {
        color: #4BDFEA;
        font-size: 1.25rem;
        font-weight: 500;
    }
    .outline-btn {
        background: none;
        border: 1px solid #0E0D39;
        padding: 0.25rem 1rem;
        border-radius: 0.5rem;
        color: #0E0D39;
        font-size: 1.25rem;
        font-weight: 500;

        &:disabled {
            opacity: 0.5;
        }
    }
    .icon-btn {
        background: none;
        border: none;
    }
    .icon-btn.text {
        background: radial-gradient(63.11% 63.11% at 31.97% 19.67%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
        linear-gradient(0deg, #EDD6FF, #EDD6FF);        
        border: none;
        color: #0E0D39;
        font-weight: 500;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
    }

    @media (max-width: 375px) {
      .giveaway-card {
        padding: 1.5rem 1rem;
      }
    }

`;

const GiveawayCard = () => {
  return (
    <div className="col-12 col-lg-6 mt-5">
      <GlobalStyles />
      <h3>Giveaways</h3>

      <div className="giveaway-card">
        <div>
          <h5>Link</h5>
          <a href="#">google.form.gg/12412....</a>
        </div>
        <div className="mt-4">
          <h5>Data</h5>
          <a href="#">google.form.gg/12412....</a>
        </div>

        <div className="mt-4">
          <h5>Prize</h5>
          <div className="d-flex gap-2 gap-md-3 mt-2 flex-wrap">
            <button className="outline-btn">NFT</button>
            <button className="outline-btn">Whitelist</button>
            <button className="outline-btn" disabled>
              Real Prize
            </button>
            <button className="outline-btn" disabled>
              Coupon
            </button>
          </div>
        </div>

        <div className="mt-4">
          <h5>Required Data</h5>
          <div className="d-flex gap-2 gap-md-3 mt-3 flex-wrap">
            <button className="icon-btn">
              <DiscordIcon />
            </button>
            <button className="icon-btn">
              <MetamaskIcon />
            </button>
            <button className="icon-btn">
              <TwitterIcon />
            </button>
            <button className="icon-btn">
              <GmailIcon />
            </button>
            <button className="icon-btn">
              <TelegramIcon />
            </button>
            <button className="icon-btn">
              <InstagramIcon />
            </button>
            <button className="icon-btn text">
              <span>?</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveawayCard;
