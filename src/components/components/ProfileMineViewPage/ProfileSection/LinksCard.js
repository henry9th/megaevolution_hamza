import styled from 'styled-components';
import Card from '../Card';
import {
  WebsiteIcon,
  YoutubeIcon,
  TwitterIcon,
  InstagramIcon,
  TikTokIcon,
  BlogIcon,
} from '../../ImageGallery/icons';

const TypeToIcon = {
  Website: WebsiteIcon,
  Youtube: YoutubeIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  Tiktok: TikTokIcon,
  Blog: BlogIcon,
};

const LinkList = styled.ul`
  list-style: none;
  padding: 0 0.5rem 0 0;
  margin: 1.5rem 0 0.75rem 0;
  max-height: 15rem;
  overflow-y: scroll;

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
`;

const LinkItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 5fr 1fr;
  align-items: center;
  border: 3px solid #edd6ff;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const H5 = styled.h5`
  font-weight: 700;
  margin: 0;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
`;

const listItems = [
  {
    id: 1,
    name: 'ABC',
    type: 'Youtube',
    url: 'https://www.youtube.com/',
    info: {
      subscribers: '124000',
      views: '1000000',
    },
  },
  {
    id: 2,
    name: 'XYZ',
    type: 'Twitter',
    url: 'https://twitter.com/',
    info: {
      followers: '124000',
    },
  },
];

const LinksCard = () => {
  return (
    <Card className="h-100">
      <h4>Links *</h4>

      <LinkList>
        {listItems.map((item) => {
          const Icon = TypeToIcon[item.type];

          return (
            <LinkItem key={item.id}>
              <div className="d-flex gap-3 justify-content-center justify-content-sm-start align-items-center">
                <Icon size={0.7} />
                <h4 className="m-0">{item.name}</h4>
              </div>
              <div className="d-flex mt-2 mt-sm-0 gap-2 gap-sm-4 items-center justify-content-center justify-content-sm-start flex-wrap ">
                {item.info &&
                  Object.keys(item.info).map((key) => (
                    <H5 key={key} className="text-capitalize  ">
                      <span>{item.info[key]}</span> {key}
                    </H5>
                  ))}
              </div>
              <div className="d-flex mt-3 mt-sm-0 justify-content-sm-end justify-content-center">
                <IconButton className="text-primary">
                  <i className="fa fa-check-circle fa-lg" aria-hidden="true"></i>
                </IconButton>
              </div>
            </LinkItem>
          );
        })}
      </LinkList>
    </Card>
  );
};

export default LinksCard;
