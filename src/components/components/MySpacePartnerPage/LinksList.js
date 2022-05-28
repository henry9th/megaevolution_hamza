import { createGlobalStyle } from 'styled-components';
import {
  DiscordIcon,
  GmailIcon,
  InstagramIcon,
  MetamaskIcon,
  TelegramIcon,
  TwitterIcon,
} from '../ImageGallery/icons';

const GlobalStyles = createGlobalStyle`
    h3 {
        color: #0E0D39;
    }
    .links-card {
        width: 100%;
        height: 500px;
        border-radius: 1rem;
        border: 3px solid #EDD6FF;
        background: #FFFFFF;
        padding: 1rem 0.5rem;

        &__content {
            width: 100%;
            height: 100%;
            overflow-y: scroll;
            overflow-x: hidden;
            padding: 0 1rem;

            &::-webkit-scrollbar {
                width: 0.5rem;
            }
            &::-webkit-scrollbar-track {
                background: transparent;
            }
            &::-webkit-scrollbar-thumb {
                background: #cfcfd7;
                transition: all 0.3s ease-in-out;
                border-radius: 0.5rem;
            }
            &::-webkit-scrollbar-thumb:hover {
                background: #bfbfc7;
            }

            &__item {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 4fr;
                grid-gap: 1rem;
                align-items: center;
                margin-bottom: 0.5rem;
                padding: 1rem 2rem;
                border-radius: 1rem;
                border: 3px solid #EDD6FF;
                overflow: hidden;

                h5 {
                    color: #0E0D39;
                    font-weight: 500;
                    text-overflow: ellipsis;
                    width: 100%;
                    margin: 0;
                }  

                span {
                  color: #0E0D39;
                    font-weight: 500; 
                }
            }
        }
    }

    @media (max-width: 425px) {
      .links-card {
          padding: 0.75rem 0.365rem;

          &__content {
            padding: 0rem 0.75rem;
          
            &__item {
              gap: 0.5rem;
              padding: 0.75rem 1rem;
            }
          }
      }
    }

    @media (max-width: 375px) {
      .links-card {
        padding: 0.75rem 0rem;
        
        &__content {
          padding: 0rem 0.5rem;
        }
      }
    }
  }
`;

const links = [
  {
    Icon: DiscordIcon,
    url: 'https://twitter.com/meg...',
  },
  {
    Icon: MetamaskIcon,
    url: 'https://twitter.com/meg...',
  },
  {
    Icon: TwitterIcon,
    url: 'https://twitter.com/meg...',
  },
  {
    Icon: GmailIcon,
    url: 'https://twitter.com/meg...',
  },
  {
    Icon: TelegramIcon,
    url: 'https://twitter.com/meg...',
  },
  {
    Icon: InstagramIcon,
    url: 'https://twitter.com/meg...',
  },
  {
    Icon: () => <span>Others</span>,
    url: 'https://twitter.com/meg...',
  },
];

const LinksList = () => {
  return (
    <div className="col-12 col-lg-6 mt-5">
      <GlobalStyles />
      <h3>Links</h3>

      <div className="links-card">
        <div className="links-card__content">
          {links.map((link, index) => {
            return <ListItem key={index} icon={link.icon} url={link.url} />;
          })}
        </div>
      </div>
    </div>
  );
};

const ListItem = ({ icon, url }) => {
  return (
    <div className="links-card__content__item">
      {icon}

      <div>
        <h5>{url}</h5>
      </div>
    </div>
  );
};

export default LinksList;
